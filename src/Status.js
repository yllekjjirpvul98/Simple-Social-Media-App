import React from 'react';
import { Input, Card, Icon, Modal } from 'antd';
import {Container} from '@material-ui/core';
import { textAlign } from '@material-ui/system';
const {Meta} = Card;

class Status extends React.Component {
    
    constructor (props){
        super(props);
        this.state = {visible : false, new_content:''};
    }

    showModal = () => {
        this.setState({
          visible: true,
          new_content : this.props.item.content
        });
    };

    handleChange = e => {
        this.setState({
          new_content: e.target.value,
        });
    };

    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    // update edited status via Azure Functions
    handleOk = async e => {
        const new_content = this.state.new_content;
        const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/editStatus?id=" + this.props.item.id;
        const options = {method : 'POST'}
        options.body = JSON.stringify({
            content : new_content
        });
        await fetch(uri, options)
        .then(response => response.json())
        .then(this.setState({
            visible: false,
          }))
        .then(this.props.handler())
        .catch(err => console.log(err))
    };


    isUserTweet() {
        // check if post 
        return this.props.user.username === this.props.item.username;
    }

    async handleDelete (){
        const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/deleteStatus?id="+this.props.item.id;
        const options = {method : 'GET'}
        await fetch(uri, options)
        .then(response => response.json())
        .then(this.props.handler())
        .catch(err => console.log(err))
    }

    render() {

        const text = <Meta title={this.props.item.username+"  ("+this.props.item.datetime+")"} description={this.props.item.content}/>

        if (this.isUserTweet()) {

            return (
                <Container style={{width:'60vw', textAlign:"center"}}>
                <Card style={{margin:0, padding: 0}} 
                      actions={[
                      <Icon type="edit" key="edit" onClick={this.showModal}/>, 
                      <Icon type="delete" onClick={this.handleDelete.bind(this)}/>]
                      }>
                    {text}
                </Card>
                <Modal
                    title="Edit your status"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel}
                >
                    <Input.TextArea id="textarea" onChange={this.handleChange.bind(this)} rows='5' cols='35' style={{'resize':'none', 'fontSize' : '18px'}} value={this.state.new_content} placeholder="What do you want to post today?"/>
                </Modal>
                </Container>
            );
        }else {
            return (
                <Container style={{width:'60vw', textAlign:"center"}}>
                <Card>
                    {text}
                </Card>
                </Container>
            )
        }

    }
}
export default Status;