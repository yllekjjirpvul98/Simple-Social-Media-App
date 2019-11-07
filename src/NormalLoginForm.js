import { Form, Icon, Input, Button, Tooltip } from 'antd';
import React from 'react';

class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // register user with form values
        const id = this.props.user.id;
        values['id'] = id;
        // post value to database by calling api
        const options = {method: 'POST', headers: {Authorization : 'Bearer ' + this.props.accessToken}}
        options.body = JSON.stringify(values)
        const uri = "https://cad-cw-cmy1g17.azurewebsites.net/api/registerUser"
        await fetch (uri, options)
        .then(response => console.log(response.json()))
        .then(data => this.props.handleRegister())
        .catch(err => console.log(err))
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email address!' },
          {type: 'email', message:'The input is not a valid email'},],
          initialValue:this.props.user.mail
           })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-mail"
            />,
          )}
        </Form.Item>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your Name!' }],
            initialValue: this.props.user.givenName + " " + this.props.user.surname
          })(
            <Input
              placeholder="Input your name"
            />,
          )}
        </Form.Item>
        <Form.Item label={
        <span>Username&nbsp;
        <Tooltip title = "This name will be shown to other users">
          <Icon type="question-circle-o"/>
        </Tooltip>
        </span>}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              placeholder="Input your username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;