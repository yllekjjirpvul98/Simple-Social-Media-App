import React from 'react';
import { Row, Col, Card, Table } from 'antd';
import { Container } from '@material-ui/core';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

class Profile extends React.Component {

    constructor(props){
        super (props);
        this.following.bind(this);
        this.follower.bind(this);
    }

    componentDidMount(){
        this.props.fetchFollowingList();
        this.props.fetchFollowerList();
    }

    following() {
        const row = [];
        const columns = [
            {
                title: 'Username',
                dataIndex : 'username',
                key : 'username'
            },
            {
                title: 'Name',
                dataIndex : 'name',
                key : 'name'
            },
            {
                title: 'Email',
                dataIndex : 'email',
                key : 'email'
            }
        ]
        const data = this.props.followingData;
        for (let i = 0; i < data.length; i++){
            row.push({
                key : 'following'+i,
                username : '@' + data[i].username,
                name : data[i].name,
                email : data[i].email
            })
        }
        return (
            <Container style={{textAlign:'center'}}>
                <h2>List of Following</h2>
                <Table columns={columns} dataSource={data}/>
            </Container>
        )
    }
    
    follower() {
        const row = [];
        const columns = [
            {
                title: 'Username',
                dataIndex : 'username',
                key : 'username'
            },
            {
                title: 'Name',
                dataIndex : 'name',
                key : 'name'
            },
            {
                title: 'Email',
                dataIndex : 'email',
                key : 'email'
            }
        ]
        const data = this.props.followerData;
        for (let i = 0; i < data.length; i++){
            row.push({
                key : 'follower'+i,
                username : '@' + data[i].username,
                name : data[i].name,
                email : data[i].email
            })
        }
        return (
            <Container style={{textAlign:'center'}}>
                <h2>List of Follower</h2>
                <Table columns={columns} dataSource={data}/>
            </Container>
        )
    }

    render() {
        return (
    <Router>
    <div>
    <Row>
      <Col span={24}>
          <Container style={{textAlign:'center'}}>
            <Card bordered={false}>
                <h1>{'@' + this.props.user.username}</h1>
                <div style={{fontSize : '20px'}}>{this.props.user.name}</div>
                <div style={{fontSize : '20px'}}>{this.props.user.email}</div>
            </Card>
            <Row>
            <Col span={12}>
                <Container>
                    <Link to="/follower">
                        <Card>
                            <h2>Number of Followers</h2>
                            <div style={{fontSize: '30px'}}>{this.props.followerList.length}</div>
                        </Card>
                    </Link>
                </Container>
            </Col>
            <Col span={12}>
                <Container>
                    <Link to="/following">
                        <Card>
                        <h2>Number of Following</h2>
                        <div style={{fontSize: '30px'}}>{this.props.followingList.length}</div>
                        </Card>
                    </Link>
                </Container>
            </Col>
            </Row>  
          </Container>
        </Col>
    </Row>
    <Row>
        <Col span={24}>
            <Switch>
                <Route exact path="/following">{this.following()}</Route>
                <Route exact path="/follower">{this.follower()}</Route>
            </Switch>
            
        </Col>
    </Row>
    </div>
    </Router>
    )
    }




}
export default Profile;