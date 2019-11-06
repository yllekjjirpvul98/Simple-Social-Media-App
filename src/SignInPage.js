import React from 'react';
import { Container } from '@material-ui/core';
import { Button, Typography, Layout, Spin } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import config from './Config';
import { UserAgentApplication } from 'msal';
import MainPage from './MainPage';
import LoginPage from './LoginPage';


class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.UserAgentApplication = new UserAgentApplication({
            auth: {
                clientId: config.appId,
                authority: "https://login.microsoftonline.com/4a5378f9-29f4-4d3e-be89-669d03ada9d8",
                redirectURI: "http://localhost:3000"
            },
            cache: {
                cacheLocation: "localStorage",
                storeAuthStateInCookie: false
            }
        })

        var user = this.UserAgentApplication.getAccount();

        this.state = {
            user: {},
            isAuthenticated: (user !== null),
            authResponse: null,
            error: {},
            db_user: [],
            updateUser: false
        };

        if (user) {
            this.getUserProfile();
        }

        this.getUserProfile = this.getUserProfile.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
        this.signIn = this.signIn.bind(this);
        this.getUserFromDb = this.getUserFromDb.bind(this);
    }

    async getUserDetails(accessToken) {
        var graph = require('@microsoft/microsoft-graph-client');
        const client = graph.Client.init({
            authProvider: (done) => {
                done(null, accessToken.accessToken);
            }
        });
        const user = await client.api('/me').get();
        return user;
    }

    async getUserProfile() {
        try {
            // get access token silently
            var accessToken = await this.UserAgentApplication.acquireTokenSilent({
                scopes: config.scopes
            });
            if (accessToken) {
                // get user profile
                var user = await this.getUserDetails(accessToken);
                console.log(user);
                this.setState({
                    isAuthenticated: true,
                    user: user,
                    error: {},
                    authResponse: accessToken.accessToken,
                    updateUser: true
                });
                this.getUserFromDb();
            }
        } catch (error) {
            this.setState({
                isAuthenticated: false
            })
        }
    }

    async signIn() {
        try {
            await this.UserAgentApplication.loginPopup(
                {
                    scopes: config.scopes,
                    prompt: "select_account"
                }
            );
            await this.getUserProfile();
        } catch (err) {
            var error = {}
            error = {
                message: err.message,
                debug: JSON.stringify(err)
            }
            this.setState({
                isAuthenticated: false,
                user: {},
                error: error
            })
        }
    }

    getUserFromDb() {
        const url = "https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDB?id=" + this.state.user.id;
        const options = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + this.state.authResponse }
        }
        fetch(url, options)
            .then(response => response.json())
            .then(user =>
                this.setState({ db_user: user })
            )
    }

    handleRegister() {
        console.log("register handle");
        this.setState({ updateUser: true });
    }

    componentDidUpdate(prevProps, prevStates) {
        if (this.state.updateUser) {
            this.getUserFromDb();
            console.log(this.state.db_user);
            if (prevStates.db_user !== this.state.db_user) {
                this.setState({ updateUser: false });
            }
        }
    }

    logIn() {
        const { Title } = Typography;

        return this.state.isAuthenticated ? (
            // check if user already in the database
            !this.state.updateUser ? (
                this.state.db_user.length === 0 ? (
                    // user has not registered yet
                    <Redirect to={{ pathname: "/register", state: { user: this.state.user, accessToken: this.state.authResponse }, handleRegister: this.handleRegister.bind(this) }} />
                ) :
                    // direct user to status page
                    (
                        <Redirect to={{ pathname: "/status", state: { user: this.state.db_user[0], accessToken: this.state.authResponse } }} />
                    )
            ) :
                (
                    <Container style={{ width: '100vw', height: '100vh', textAlign: 'center' }}>
                        <Spin size="large" />
                    </Container>
                )
        )
            : (
                <Layout style={{ textAlign: "center", margin: "20%", background: "white" }}>
                    <Container>
                        <Title>Welcome to the Social Media!</Title>
                        <Button onClick={this.signIn}>Click here to sign in</Button>
                    </Container>
                </Layout>
            );
    }

    render() {
        return (
            <Router>
                <div>
                    {this.logIn()}
                </div>
                <Switch>
                    <Route path="/register" component={LoginPage} />
                    <Route path="/status" component={MainPage} />
                </Switch>
            </Router>
        );
    }
}



export default SignInPage;