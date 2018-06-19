import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline, Button, Icon, Spin, Row, Col } from 'antd';
import history from 'router/history';

import './TimeLine.css';

export default class SpringBoot extends Component {
    static propTypes = {
        repositoryTree: PropTypes.array
    }
    constructor(props) {
        super(props);
    }
    handleClick(url, e) {
        // console.log(url, this.props);
        const data = {git_url:url};
        const path = {  
            pathname:'/reveal',  
            state:data
          }  
        history.push(path);
    }

    render() {
        return (
            <div id='SpringBoot' className='container' >
                {/* <DataTrees data={ message } click={ this.handleClick } /> */}
                <Timeline>
                    {
                        this.props.repositoryTree.map((element, index) => {
                            return (
                                <Timeline.Item key = {index} 
                                    onClick={ this.handleClick.bind(this, element.git_url) } >
                                    <Icon type="caret-left" />{new Date(element.date).toISOString().slice(0, 10)} {element.name} 
                                </Timeline.Item>
                            )
                        })
                    }
                </Timeline>
            </div>
        )
    }
}
