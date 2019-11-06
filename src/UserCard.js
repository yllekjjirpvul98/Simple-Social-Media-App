import React from 'react';
import { Card, Button } from 'antd';

class UserCard extends React.Component {

    constructor(props){
        super(props);
    }



    handleUnfollow = e => {
        // talk to azure functions to unfollow a user
        const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/unfollowUser?from=" + this.props.user.id + "&to=" + this.props.profile.id;
        fetch(uri)
        .then(response => response.json())
        .then(this.props.handler())
        .catch(err => console.log(err))
    }

    handleFollow = e => {
        // talk to azure functions to follow a user
        const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/followUser?from=" + this.props.user.id + "&to=" + this.props.profile.id;
        fetch(uri)
        .then(response => response.json())
        .then(this.props.handler())
        .catch(err => console.log(err));
    }



    render () {
        let button;
        if (this.props.following.includes(this.props.profile.id)) {
            // user already following this user
            button = <Button type="primary" onClick={this.handleUnfollow}>Following</Button>
        }else {
            button = <Button type="primary" onClick={this.handleFollow}>Follow</Button>
        }
        return (
            <Card bordered={false} title={'@'+this.props.profile.username} style={{textAlign: 'center'}}>
                <div>{this.props.profile.name}</div>
                <div>{button}</div>
            </Card>
        );
        
    }

}
export default UserCard;