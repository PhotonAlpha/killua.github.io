import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentInput from 'components/Comment/CommentInput'
import { addComment } from 'reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    };
    constructor(props) {
        super(props);
        console.log('CommentInputContainer', props)
        this.state = { username: '' }
    }
    
    componentWillMount() {
        this._loadUsername()
    }
    
    _loadUsername() {
        // 从 LocalStorage 加载 username
        // 然后可以在 render 方法中传给 CommentInput
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }
    _saveUsername(username) {
        // 看看 render 方法的 onUserNameInputBlur
        // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
        localStorage.setItem('username', username)
    }
    handleSubmitComment (comment) {
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }
    
    render() {
        return (
            <CommentInput username={ this.state.username }
                onUserNameInputBlur={ this._saveUsername.bind(this) }
                onSubmit={ this.handleSubmitComment.bind(this) }
            />
        );
    }
}

export default CommentInputContainer;

