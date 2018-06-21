import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentInput from './CommentInput';
import CommentList from './CommentList';
import 'components/Comment/CommentApp.css'

import { getComments, postComments } from "reducers/comments";

class CommentAppContainer extends Component {
    static propTypes = {
        issueNo: PropTypes.number
    }
    constructor(props) {
        super(props);
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('CommentAppContainer componentWillReceiveProps', nextProps);
        if(nextProps.issueNo != this.props.issueNo) {
            this.setState({
                issueNo: nextProps.issueNo
            },()=> {
                console.log('componentWillReceiveProps', this.props.issueNo)
                if(this.props.issueNo>0){
                    this.props.getComments(this.props.issueNo);
                }
            })
        }
    }
    
    handleSubmitComment(comment) {
        console.log('handleSubmitComment', this.props, comment);
        let bodycontent = comment.username+': '+comment.content
        if(comment.star >0) {
            bodycontent += ('<br/> star '+comment.star);
        }
        if (this.props.postComments) {
            this.props.postComments(this.props.issueNo, bodycontent)
                .then(() => {
                    console.log('postComments');
                    this.props.getComments(this.props.issueNo);
                })
        }
    }
    
    render() {
        const { isLoading, errorMsg} = this.props.commentStore;
        let { message } = this.props.commentStore;
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
        commentStore: state.commentStore
    }
}

const mapDispatchToProps = {
    getComments,
    postComments
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentAppContainer)