import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Base64 } from 'js-base64';

import { searchBlogIssues } from "reducers/issues";
import { getUserInfo } from "reducers/authorization";
import './Archives.css';
import CommentApp from 'containers/Comment/CommentApp';
import { AUTHURL } from 'components/Utils/Utils'

export class Archives extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state={
            issue_title: '第一篇博文',
            git_url: 'ef1a1d4d44f05241c7a286cd6ee75447492a49cd'
        }
    }
    
    componentWillMount() {
        this.props.searchBlogIssues(this.state.issue_title);
    }
    handleAuthentication(){
        let href = AUTHURL+'?hash='+this.state.git_url+'title='+Base64.encode(encodeURIComponent(this.state.issue_title));
        console.log('handleAuthentication', href);
        window.location.href = href;
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.issueStore;
        let issueNo = 0;
        if(Array.isArray(message.items)){
            let item = message.items[0];
            issueNo=item.number;
        }
        console.log('issueNo',issueNo);
        return (
            <div className="container">
                <CommentApp handleAuth = { this.handleAuthentication.bind(this) } issueNo={issueNo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issueStore: state.issueStore,
        authorizationStore: state.authorizationStore
    }
}

const mapDispatchToProps = {
    searchBlogIssues,
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives)
