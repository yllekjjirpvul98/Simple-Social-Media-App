import React from 'react';
import { Layout, Typography, List, Card } from 'antd';
import { Container } from '@material-ui/core';
import UserCard from './UserCard'; 
 
const { Content } = Layout;
const { Title } = Typography;

class CommunityPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {updateFollow : false};
    }

    async componentDidMount(){
        await this.props.fetchUsers();
        await this.props.fetchFollowingList();
    }

    handler(){
        this.setState({updateFollow : true});
    }

    async componentDidUpdate(prevProps, prevState){
        if (this.state.updateFollow) {
            const size = prevProps.following.length;
            await this.props.fetchFollowingList();
            if (size !== this.props.following.length) {
                // data fetch is consistent to write
                this.setState({updateFollow:false});
            }
        }
    }

    render () {
        return (
            <Layout>
            <Content>
                <Container style={{textAlign:'center'}}>
                    <h1>Explore the community</h1>
                    <List grid= {{gutter : 16, column: 4}}
                    dataSource={this.props.users}
                    renderItem={item => (
                        <List.Item>
                            <UserCard user={this.props.user} following={this.props.following} profile={item} handler={this.handler.bind(this)}/>
                        </List.Item>
                    )} 
                    />                   
                </Container>
            </Content>
            </Layout>
        );
    }

}
export default CommunityPage;