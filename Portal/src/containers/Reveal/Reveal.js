import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'router/history';

import { getBlogData } from "reducers/blogs";
import { searchBlogIssues } from "reducers/issues";
import Reveal from 'components/Reveal/Reveal';
import Loading from 'components/Loading/Loading';
import CommentApp from 'containers/Comment/CommentApp';
import { AUTHURL } from 'components/Utils/Utils';

export class RevealContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state = {
            git_url: '',
            issue_title: '',
        }
    }
    
    componentWillMount() {
        // const queryParams = new URLSearchParams(this.props.location.search);
        // const data = this.props.location.state;
        console.log('queryParams', this.props)
        const restParams = this.props.match.params;
        const git_url = restParams.hash;
        const issue_title = restParams.title;
        if(git_url && issue_title){
            this.setState({
                git_url,
                issue_title,
            },()=>{
                this.props.getBlogData(git_url);
                this.props.searchBlogIssues(issue_title);
            })
        }else{
            const path = {  
                pathname:'/404',  
            }  
            history.push(path);
        }
    }

    handleAuthentication(){
        let href = AUTHURL+'?hash='+this.state.git_url+'title='+Base64.encode(encodeURIComponent(this.state.issue_title));
        // console.log(href);
        window.location.href = href;
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        const issueMessage = this.props.issueStore.message;
        console.log(issueMessage)
        let issueNo = this.state.number;
        if(Array.isArray(issueMessage.items) && issueMessage.items.length > 0){
            let item = issueMessage.items[0];
            issueNo=item.number;
        }
        console.log('issueNo',issueNo);
        return (
            <div >
                {
                    isLoading? <Loading />: (
                        errorMsg? errorMsg :
                            <Reveal blogContent={ message.content } />
                    )
                }
                <CommentApp handleAuth = { this.handleAuthentication.bind(this) } issueNo={issueNo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogStore: state.blogStore,
        issueStore: state.issueStore,
    }
}

const mapDispatchToProps = {
    getBlogData,
    searchBlogIssues
}

export default connect(mapStateToProps, mapDispatchToProps)(RevealContainer)
