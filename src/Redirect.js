
import queryString from 'query-string';
import React from 'react';
import {Redirect,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';

class Redirection extends React.Component {


    constructor(props) {
        super(props);
        this.state = { code : null, authResponse : null, user : null, accessToken : null, refreshToken : null };
    }

    componentDidMount() {

        // getting the code from the query string
        if (this.props.location !== undefined) {
        const values = queryString.parse(this.props.location.search);

        if (values.code){
            this.state.code = values.code;
            // use the authorization code to request bearer token if does not exist yet with the code
            const url = "https://login.microsoftonline.com/4a5378f9-29f4-4d3e-be89-669d03ada9d8/oauth2/v2.0/token";
            fetch(url, {method: 'POST',
            headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Host':'https://login.microsoftonline.com'},
            redirect: 'manual',
            body: 'client_id=f6848992-be00-4b00-8eb6-18f1654d6a81&grant_type=authorization_code&code=' +this.state.code+ '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&client_secret=8Ww=UJ2CBUekD4OFX..snxq:6YC7AX1y'
        })
            .then(response => console.log(response.json()))
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }

        if (values.access_token) {
            // set both values
            this.setState({accessToken : values.access_token, refreshToken : values.refresh_token});
            // get id token
        const options = {
            method: 'POST',
            headers: new Headers({'Authorization' : 'Bearer' + this.state.accessToken})
        }
        fetch('https://cad-cw-cmy1g17.azurewebsites.net/api/getAuthenticatedUser', options)
        .then(response => console.log(response.json))
        .then(data => this.setState({authResponse : data}))
        .then(() => {
        // check whether user has already registered
        const url = "https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDB?id=" + this.state.data.id;
        fetch (url, options)
        .then(response => response.json())
        .then(function(user) {
            // if user exist in database
            if (user) {
                // redirect to main page with user info
                return <Redirect to={{
                    pathname: '/main',
                    state: { user : user}
                }}/>
            }else {
                // redirect to register page with authResponse info
                return <Redirect to={{
                    pathname: '/register',
                    state: { auth : this.state.authResponse}
                }}/>
            }
        })
        })
        .catch(error => console.log(error));
        }
    }
    }

    render () {
        return (
        <Router>
            <Switch>
                <Route path="/register"><LoginPage/></Route>
                <Route path="/main"><MainPage/></Route>
                <Route path="/callback"><Callback/></Route>
            </Switch>
        </Router>
        );
    }
}

function Callback() {
    
}

export default Redirection;