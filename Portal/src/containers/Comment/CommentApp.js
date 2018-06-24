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
        handleAuth: PropTypes.func,
        specify: PropTypes.bool
    }
    constructor(props) {
        super(props);
        
    }
    static defaultProps = {
        specify: false
    };
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.issueNo, this.props.issueNo)
        if(nextProps.issueNo != this.props.issueNo) {
            if(nextProps.issueNo > 0){
                this._initComments(nextProps.issueNo)
            }
        }
    }
    componentWillMount() {
        console.log('componentWillMount' , this.props)
        if(this.props.getUserInfo){
            if(this.props.specify === true){
                this.props.getUserInfo(this.props.specify);
            }else{
                this.props.getUserInfo();
            }
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
        console.log('handleSubmitComment',  comment.content)
        if (this.props.postComments && this.props.issueNo > 0) {
            this.props.postComments(this.props.issueNo, bodycontent, this.props.specify)
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
                    <CommentInput 
                        handleAuth={ this.handleAuth.bind(this) } 
                        userInfo={ this.props.authorizationStore } 
                        onSubmit={ this.handleSubmitComment.bind(this) }
                        commentCount={ message.length }
                        />
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