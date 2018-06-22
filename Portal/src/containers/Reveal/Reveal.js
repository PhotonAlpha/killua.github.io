import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'router/history';

import { getBlogData } from "reducers/blogs";
import { searchBlogIssues } from "reducers/issues";
import Reveal from 'components/Reveal/Reveal';
import Loading from 'components/Loading/Loading';
import CommentApp from 'containers/Comment/CommentApp';

export class RevealContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
        console.log('RevealContainer constructor');
        this.state = {
            git_url: ''
        }
    }
    
    componentWillMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        const data = this.props.location.state;
        console.log('queryParams', queryParams.get('hash'), data)
        if(data){
            const { git_url, issue_title } = data;
            console.log('RevealContainer componentWillMount', data);
            this.props.getBlogData(git_url);
            this.props.searchBlogIssues(issue_title);
        }else{
            const path = {  
                pathname:'/404',  
            }  
            history.push(path);
        }
    }

    handleAuthentication(){
        let href = AUTHURL+'?hash='+this.state.git_url+'title='+Base64.encode(encodeURIComponent(this.state.issue_title));
        console.log('handleAuthentication', href);
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        const issueMessage = this.props.issueStore.message;
        let issueNo = 0;
        if(Array.isArray(issueMessage.items)){
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
// const gitalk = new Gitalk({
//     clientID: '22f33b7f43ec9ae6d0c9',
//     clientSecret: '28897992561806c11dbf14f231dc6c31afa985e5',
//     repo: 'blogs',
//     owner: 'photonalpha',
//     admin: ['photonalpha'],
//     id: 'issue-comment',
//     distractionFreeMode: false  // Facebook-like distraction free mode
// })

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
