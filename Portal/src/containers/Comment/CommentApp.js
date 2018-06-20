import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentInput from './CommentInput';
import CommentList from './CommentList';
import 'components/Comment/CommentApp.css'

import { getComments, postComments } from "reducers/issues";

class CommentAppContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentWillMount() {
        console.log('CommentAppContainer componentWillMount')
        this.props.getComments();
    }
    handleSubmitComment(comment) {
        console.log('handleSubmitComment', this.props, comment);
        let bodycontent = comment.username+': '+comment.content
        if(comment.star >0) {
            bodycontent += ('<br/> star '+comment.star);
        }
        if (this.props.postComments) {
            this.props.postComments(bodycontent)
                .then(() => {
                    console.log('postComments');
                    this.props.getComments();
                })
        }
    }
    
    
    render() {
        const { isLoading, errorMsg} = this.props.issueStore;
        let { message } = this.props.issueStore;
        console.log('comments message', message)
        if(!Array.isArray(message)){
            message= [];
        }
        return (
            <div>
                <CommentInput onSubmit={ this.handleSubmitComment.bind(this) } />
                <CommentList comments={ message } />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        issueStore: state.issueStore
    }
}

const mapDispatchToProps = {
    getComments,
    postComments
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentAppContainer)