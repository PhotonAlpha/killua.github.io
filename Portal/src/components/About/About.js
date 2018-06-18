import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class About extends Component {
    static propTypes = {
        handleOk: PropTypes.func,
        blogContent: PropTypes.object

    }
    constructor(props) {
        super(props);
      
    }
    showModal() {
        this.setState({
            visible: true,
            visibleCv: false,
        });
    }
    handleOk(saltVal) {
        if(this.props.handleOk){
            this.props.handleOk(saltVal).then(() => {
                console.log('handleOk', this.props.resume);
                this.setState({
                    visible: false,
                    salt: saltVal,
                    visibleCv: true,
                    error: false,
                    resume: this.props.resume
                });
            })
        }
    }
  

    render() {
        return (
            <div id='aboutPage' >
                <ReactMarkdown source={ Base64.decode(this.props.blogContent) } />
                <a className="github-fork-ribbon" href="https://github.com/PhotonAlpha/photonalpha.github.io/tree/master/Portal" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                <Letter triggerDialog = { this.showModal.bind(this) } />
                <Dialogue dialogues={this.state} handleOk={ this.handleOk.bind(this) } />
                <DialogueCV dialogues={this.state} />
            </div>
        )
    }
}

function Letter(props) {
    return (
        <div id = 'letter' onClick = { this.props.triggerDialog() } >
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
    )
}