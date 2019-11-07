import React from 'react';
import { Layout, Menu, Icon, Typography, Result } from 'antd';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StatusPage from './StatusPage';
import CommunityPage from './CommunityPage';
import Profile from './Profile';

const { Header, Content } = Layout;
const { Title } = Typography;
const menuItemSize = {
  fontSize: '20px',
  paddingTop: '25px'
};
const menuPlaceHolder = { height: '10vh', width: '20vw', textAlign: 'center' }


class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { statusData: [], users: [], following: [], followerList: [], followingData: [], followerData: [], updatedPost:false, updatedStatus:false }
  }

  async componentDidMount() {
    await this.fetchFollowingList();
  }

  async componentDidUpdate(prevProps, prevStates) {
      if (this.state.updatedPost || this.state.updatedEdit) {
        await this.statusUpdate();
        if (prevStates.statusData !== this.state.statusData) {
          this.setState({updatedEdit : false, updatedPost : false})
        }
      }

  }

handlerPost(value) {
    this.setState({updatedPost : true});
}

handlerEdit(value) {
    this.setState({updatedEdit : true});
}

  async fetchUsers() {
    // fetch all users from database
    const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/getAllUsers";
    const id = this.props.location.state.user.id;
    await fetch(uri)
      .then(response => response.json())
      .then(data => {
        return data.filter(function (value, index, arr) {
          return value.id !== id
        })
      })
      .then(data => this.setState({ users: data }))
  }

async fetchFollowingList() {
    // fetch list of following
    const id = this.props.location.state.user.id;
    const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/getFollowing?id=" + this.props.location.state.user.id;
    await fetch(uri)
    .then(response => response.json())
    .then(data => {
        this.setState({ following: data })
        this.statusUpdate();
        this.fetchFollowingUserData();
    });
  }

async fetchFollowingUserData() {
    const list = this.state.following;
    await Promise.all(list.map(user => {
      const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDb?id=" + user;
      return fetch(uri, { cache: "no-cache" }).then(response => response.json())
    }))
      .then(data => {
        let result = []
        for (var i = 0; i < data.length; i++) {
          if (data.length > 0) {
            result = result.concat(data[i]);
          }
        }
        return result;
      }).then(result => this.setState({ followingData: result }))
      .catch(err => console.log(err))
  }

async fetchFollowerUserData() {
    const followerList = this.state.followerList;
    await Promise.all(followerList.map(user => {
      const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDb?id=" + user;
      return fetch(uri, { cache: "no-cache" }).then(response => response.json())
    }))
      .then(data => {
        let result = []
        for (var i = 0; i < data.length; i++) {
          if (data.length > 0) {
            result = result.concat(data[i]);
          }
        }
        return result;
      }).then(result => this.setState({ followerData: result }))
      .catch(err => console.log(err))
  }

  async fetchFollowerList() {
    // fetch list of followers
    const id = this.props.location.state.user.id;
    const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/getFollowers?id=" + this.props.location.state.user.id;
    await fetch(uri)
    .then(response => response.json())
    .then(async data => {
      this.setState({ followerList: data });
      await this.fetchFollowerUserData();
      }
    );
  }


  async statusUpdate() {
    // finding data for status list
    var followingList = this.state.following;
    followingList = [...followingList];
    if (!followingList.includes(this.props.location.state.user.id)){
      followingList.push(this.props.location.state.user.id);
    }
    await Promise.all(followingList.map(user => {
      const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/getStatus/" + user;
      return fetch(uri, { cache: "no-cache" }).then(response => response.json())
    }))
      .then(data => {
        let result = []
        for (var i = 0; i < data.length; i++) {
          if (data.length > 0) {
            result = result.concat(data[i]);
          }
        }
        result = result.sort(function (a, b) {
          return Date.parse(a.datetime) < Date.parse(b.datetime) ? 1 : -1
        });
        return result;
      }).then(result => this.setState({ statusData: result }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <Menu theme="dark" mode="horizontal" style={{ height: '10vh' }}>
          <Menu.Item key="profile" style={menuPlaceHolder}>
            <Link to="/profile">
              <span style={menuItemSize}>
                <Icon type="smile" style={menuItemSize} />
                Profile </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="status" style={menuPlaceHolder}>
            <Link to="/statusList">
              <span style={menuItemSize}>
                <Icon type="message" style={menuItemSize} />
                Status </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="user" style={menuPlaceHolder}>
            <Link to="/community">
              <span style={menuItemSize}><Icon type="user" style={menuItemSize} /> Explore </span>
            </Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/status"><Result
            icon={<Icon type="smile" theme="twoTone" />}
            title="Welcome to the Social Media App!"
          /></Route>
          <Route path="/profile"><Profile user={this.props.location.state.user} followingList={this.state.following} followingData = {this.state.followingData} followerData = {this.state.followerData} fetchFollowingList={this.fetchFollowingList.bind(this)} followerList={this.state.followerList} fetchFollowerList={this.fetchFollowerList.bind(this)} /> </Route>
          <Route path="/statusList"><StatusPage updatedPost={this.state.updatedPost} updatedEdit={this.state.updatedEdit} handlerPost={this.handlerPost.bind(this)} handlerEdit={this.handlerEdit.bind(this)} status={this.state.statusData} user={this.props.location.state.user} statusUpdate={this.statusUpdate.bind(this)} followinglist={this.state.following} fetchFollowingList={this.fetchFollowingList.bind(this)} /></Route>
          <Route path="/community"><CommunityPage user={this.props.location.state.user} users={this.state.users} following={this.state.following} fetchUsers={this.fetchUsers.bind(this)} fetchFollowingList={this.fetchFollowingList.bind(this)} /></Route>
        </Switch>

      </Router>
    );
  }

}

export default MainPage;