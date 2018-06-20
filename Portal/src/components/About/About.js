import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';
import { Tag } from 'antd';

import './About.css';

export default class About extends Component {
    static propTypes = {
        blogContent: PropTypes.string,
        state: PropTypes.object,
        showDialog: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = props.state;
    }
    showModal() {
        if(this.props.showDialog){
            this.props.showDialog()
        }
    }

    render() {
        console.log('About render', this.props, this.state);
        return (
            <div className='markdown-body' >
                <ReactMarkdown source={ Base64.decode(this.props.blogContent?this.props.blogContent:'') } />
                <a className="github-fork-ribbon" href="https://github.com/PhotonAlpha/photonalpha.github.io/tree/master/Portal" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                <div id = 'letter' onClick = { this.showModal.bind(this) } >
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
            </div>
        )
    }
}
