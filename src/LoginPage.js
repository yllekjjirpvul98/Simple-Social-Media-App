import React from 'react';
import WrappedNormalLoginForm from './NormalLoginForm';
import { Grid } from '@material-ui/core';
import { Typography } from 'antd';

class LoginPage extends React.Component {

    constructor (props) {
        super(props);
    }

    render (){
        const { Title } = Typography;
        return  (  
        <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh', minWidth: '100vw', 'background' : '#FFFACD' }}
    >
    <Grid item>
            <Typography><Title>Register for your first sign in</Title></Typography>
    </Grid>
    <Grid item>
        <WrappedNormalLoginForm user={this.props.location.state.user} handleRegister={this.props.location.handleRegister}/>
    </Grid>   

    </Grid>
    );
}
}

export default LoginPage;