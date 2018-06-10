
import React, { Component } from 'react';
import './Letter.css';
import { Tag } from 'antd';

class Letter extends Component {
    constructor(props) {
        super(props);
    }

    showModal = () => {
        console.log('Letter showModal')
        this.props.triggerDialog();
    }

    render() {
        return (
            <div id = 'letter' onClick = { this.showModal } >
                <div className="letter-image">
                    <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-title"></div>
                            <div className="letter-context"></div>
                            <div className="letter-stamp">
                                <div className="letter-stamp-inner"></div>
                            </div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                    </div>
                    <Tag size="large" color="#2db7f5">个人简历信息</Tag>
                </div>
            </div>
        );
    }
}

export default Letter;