import React, {Component} from 'react';
import history from 'router/history';

import './SpringBoot.css'
import { Timeline, Button, Icon, Spin, Row, Col } from 'antd';
import { connect } from 'react-redux';

import { getResourceTrees } from "actions/common";


class SpringBoot extends Component {
    constructor(props) {
        super(props);
        this.props.getResourceTrees();
    }
    state = {
        reverse: false,
    }
    handleClick = (url, e) => {
        console.log(url, this.props);
        const data = {git_url:url};
        const path = {  
            pathname:'/reveal',  
            state:data
          }  
        history.push(path);
    }

    render() {
        const { message , isLoading, errorMsg } = this.props.common;
        console.log('SpringBoot Render', this.props.common);
        return (
            <div id='SpringBoot' className='container' >
                <DataTrees data={ message } click={ this.handleClick } />
            </div>
            
        )
    }
}

function DataTrees(props) {
    console.log('DataTrees', props)
    const message = props.data;
    const items = message.items;
    const pattern = /^[0-9]{4}[-]{1}[0-9]{1,2}[-]{1}[0-9]{1,2}/;
    if(message && items && items.length > 0) {
        console.log(111111)
        const blogdatas = items.filter(item => {
            const name = item.name;
            const match = pattern.exec(name);
            if(match){
                return true;
            }else{
                return false;
            }
        }).map(item => {
            const name = item.name;
            const match = pattern.exec(name);
            const blogname = name.substring(match[0].length+1, name.length);
            return {
                name: blogname,
                date: Date.parse(match[0]),
                path: item.path,
                git_url: item.git_url
            }
        });
        console.log(blogdatas);
        blogdatas.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        console.log('sorted', blogdatas);
        const timelines =blogdatas.map((element, index) => {
            return (<Timeline.Item key = {index} onClick={ props.click.bind(this, element.git_url) } ><Icon type="caret-left" />{new Date(element.date).toISOString().slice(0, 10)} {element.name} </Timeline.Item>)
        });
        return (
            <Timeline>
                { timelines }
            </Timeline>
        )
    }
    return null;

}


const mapStateToProps = state => {
    return {
        common: state.common,
    }
}
const mapDispatchToProps = {
    getResourceTrees,
}
export default connect(mapStateToProps, mapDispatchToProps)(SpringBoot);