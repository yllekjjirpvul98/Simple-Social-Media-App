import React from 'react';
import { Form, Button, Input, Card } from 'antd';
import { Container } from '@material-ui/core';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

class StatusTextBox extends React.Component {
    
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            // call api to post status
            const url = "https://cad-cw-cmy1g17.azurewebsites.net/api/postStatus";
            const options = {method: 'POST', headers: {Authorization : 'Bearer ' + this.props.accessToken}}
            values['id'] = this.props.user.id;
            values['username'] = this.props.user.username;
            options.body = JSON.stringify(values);
            await fetch (url, options)
            .then(response => response.json())
            .then(data => this.props.form.resetFields())
            .then(data => this.props.handler(true))
            .catch(err => console.log(err))
          }
        });
    };



    render () {
        const { getFieldDecorator, isFieldTouched, getFieldsError, getFieldError } = this.props.form;
        const statusError = isFieldTouched('content') && getFieldError('content');

        return (
            <Container style={{width:'60vw', textAlign:"center"}}>
            <Card bordered={false}>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={statusError ? 'error' : ''} help={statusError || ''}>
                        {getFieldDecorator('content', {
                            rules: [{required: true, message : 'You cannot post empty status'}]
                        }) (
                            <Input.TextArea rows='5' cols='35' style={{'resize':'none', 'width' : '50%', 'fontSize' : '18px'}} placeholder="What do you want to post today?"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" type="primary" htmlType = "submit" disabled={hasErrors(getFieldsError())}>Post</Button>  
                    </Form.Item>
            </Form>
            </Card>
            </Container>
        );
    }

}
const WrappedStatusTextBox = Form.create({name : 'status_box'})(StatusTextBox);
export default WrappedStatusTextBox;