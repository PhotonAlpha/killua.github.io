import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'antd';

import CommentInput from './CommentInput';
import CommentList from './CommentList';
import 'components/Comment/CommentApp.css'

import { getComments, postComments } from "reducers/comments";
import { getUserInfo } from "reducers/authorization";

class CommentAppContainer extends Component {
    static propTypes = {
        issueNo: PropTypes.number,
        handleAuth: PropTypes.func
    }
    constructor(props) {
        super(props);
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.issueNo, this.props.issueNo)
        if(nextProps.issueNo != this.props.issueNo) {
            if(nextProps.issueNo > 0){
                this._initComments(nextProps.issueNo)
            }
        }
    }
    componentWillMount() {
        if(this.props.getUserInfo){
            this.props.getUserInfo();
        }
        if(this.props.issueNo > 0){
            this._initComments(this.props.issueNo)
        }
    }
    _initComments(issueNo) {
        console.log('_initComments', issueNo)
        this.props.getComments(issueNo);
    }
    
    
    handleAuth(){
        if(this.props.handleAuth){
            this.props.handleAuth()
        }
    }
    handleSubmitComment(comment) {
        let bodycontent = comment.content
        if (this.props.postComments && this.props.issueNo > 0) {
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
        if(!Array.isArray(message)){
            message= [];
        }
        return (
            <Row>
                <Col lg ={{ span:18 }} md={{ span:24 }} style={{ borderTop: '1em solid #dfe2e5' }} className='container-fluid markdown-body'>
                    <CommentInput handleAuth={ this.handleAuth.bind(this) } userInfo={ this.props.authorizationStore } onSubmit={ this.handleSubmitComment.bind(this) } />
                    <CommentList comments={ message } />
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        commentStore: state.commentStore,
        authorizationStore: state.authorizationStore
    }
}

const mapDispatchToProps = {
    getComments,
    postComments,
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentAppContainer)