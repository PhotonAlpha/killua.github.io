import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentInput from 'components/Comment/CommentInput'
import { addComment } from 'reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        handleAuth: PropTypes.func,
        userInfo: PropTypes.object
    };
    constructor(props) {
        super(props);
        console.log('CommentInputContainer', props)
        this.state = { 
            username: '',
            avatar_url: '',
            html_url: '',
            authSuccess: false
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const { message, isLoading, errorMsg} = nextProps.userInfo;
        console.log('componentWillReceiveProps', !!(nextProps.userInfo != this.props.userInfo), message, isLoading, errorMsg);
        if(nextProps.userInfo != this.props.userInfo){
            this._loadUserInfo(nextProps.userInfo)
        }
    }

    _loadUserInfo(userInfo) {
        const { message, isLoading, errorMsg} = userInfo;
        if(!isLoading && !errorMsg){
            this.setState({ 
                username: message.login,
                avatar_url: message.avatar_url,
                html_url: message.html_url,
                authSuccess: true
             })
        }else{
            this.setState({ authSuccess: false })
        }
    }
    handleAuth(){
        if(this.props.handleAuth){
            this.props.handleAuth()
        }
    }
    handleSubmitComment (comment) {
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }
    
    render() {
        console.log('render' ,this.state)
        return (
            <CommentInput userInfo={ this.state }
                handleAuth={ this.handleAuth.bind(this) }
                onSubmit={ this.handleSubmitComment.bind(this) }
            />
        );
    }
}

export default CommentInputContainer;

