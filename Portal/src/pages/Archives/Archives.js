import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchBlogIssues } from "reducers/issues";
import './Archives.css';
import CommentApp from 'containers/Comment/CommentApp';

export class Archives extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state={
            issue_title: '第一篇博文'
        }
    }
    //https://github.com/login/oauth/authorize?client_id=22f33b7f43ec9ae6d0c9&redirect_uri=http://localhost:4200/reveal?hash=ef1a1d4d44f05241c7a286cd6ee75447492a49cd
    
    componentWillMount() {
        this.props.searchBlogIssues(this.state.issue_title);
    }
    
    

    render() {
        const {message , isLoading, errorMsg} = this.props.issueStore;
        console.log('object',message , isLoading, errorMsg);
        let issueNo = 0;
        if(Array.isArray(message.items)){
            let item = message.items[0];
            issueNo=item.number;
        }
        console.log('issueNo',issueNo);
        return (
            <div className="container">
                <CommentApp issueNo={issueNo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issueStore: state.issueStore,
    }
}

const mapDispatchToProps = {
    searchBlogIssues
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives)
