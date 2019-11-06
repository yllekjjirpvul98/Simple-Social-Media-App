import React from 'react';
import { Layout, Spin } from 'antd';
import WrappedStatusTextBox from './StatusTextBox';
import { Container } from '@material-ui/core'; 
import StatusList from './StatusList';
const { Content } = Layout

class StatusPage extends React.Component {

    constructor(props){
        super(props);
    }

    

    // componentDidMount(){
    //     this.props.fetchFollowingList();
    // }
    
    display(){
        return (
            (this.props.updatedEdit || this.props.updatedPost) ? 
                <Spin/>
                :
                <StatusList data={this.props.status} user={this.props.user} handler={this.props.handlerEdit}/>
        )
    }

    render () {
        return (
            <Layout>
            <Content>
                <Container style={{textAlign:'center'}}>
                <WrappedStatusTextBox user={this.props.user} accessToken={this.props.accessToken} handler={this.props.handlerPost}></WrappedStatusTextBox>
                {this.display()}
                </Container>
            </Content>
            </Layout>
        );
    }

}
export default StatusPage;