import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
const { TextArea } = Input;

class CommentInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            content: ''
        }
    }
    componentDidMount() {
        this.textarea.focus();
    }
    componentWillMount() {
        this._loadUsername();
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    //所有私有方法都以 _ 开头
    _saveUserName(username) {
        localStorage.setItem('username', username);
    }
    _loadUsername(){
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
    }
    
    handleUsernameBlur(event) {
        console.log('handleUsernameBlur', event.target.value)
        this._saveUserName(event.target.value);
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({
                username, content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={ this.state.username } 
                            onBlur={ this.handleUsernameBlur.bind(this) }
                            onChange={ this.handleUsernameChange.bind(this) } />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={ this.state.content } onChange={ this.handleContentChange.bind(this) } />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={ this.handleSubmit.bind(this) } >
                        发布
                    </button>
                </div>
            </div>
        );
    }
}

export default CommentInput;