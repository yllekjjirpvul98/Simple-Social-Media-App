import React from 'react';
import { Container } from '@material-ui/core';
import { List } from 'antd';
import Status from './Status';
import { textAlign } from '@material-ui/system';

class StatusList extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
                <List dataSource ={this.props.data} style={{textAlign : "center"}}
                renderItem = {item => (
                    <List.Item>
                        <Status key={item.id} item={item} user={this.props.user} handler={this.props.handler}/>
                    </List.Item>
                )}>
                </List>
        );
    }

}
export default StatusList;