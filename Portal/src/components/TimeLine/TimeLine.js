import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline, Button, Icon, Spin, Row, Col } from 'antd';

import './TimeLine.css';

export default class SpringBoot extends Component {
    static propTypes = {
        repositoryTree: PropTypes.array,
        handleClick: PropTypes.func
    }
    constructor(props) {
        super(props);
    }
    handleClick(sha, title, e) {
        if(this.props.handleClick) {
            this.props.handleClick(sha, title);
        }
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
                                    onClick={ this.handleClick.bind(this, element.sha, element.name) } >
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
