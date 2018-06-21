import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'router/history';

import { getBlogData } from "reducers/blogs";
import { searchBlogIssues } from "reducers/issues";
import Reveal from 'components/Reveal/Reveal';
import Loading from 'components/Loading/Loading';

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
        console.log('componentWillMount', this.props)
        const queryParams = new URLSearchParams(this.props.location.search);
        const data = this.props.location.state;
        console.log('queryParams', queryParams.get('hash'), data)
        // if(data){
            // const { git_url, issue_title } = data;
        //     console.log('RevealContainer componentWillMount', data);
            // this.props.getBlogData(git_url);
        // }else{
        //     const path = {  
        //         pathname:'/404',  
        //     }  
        //     history.push(path);
        // }
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('RevealContainer', message , isLoading, errorMsg)
        return (
            <div  id='reveal'>
                {
                    isLoading? <Loading />: (
                        errorMsg? errorMsg :
                            <Reveal blogContent={ message.content } />
                    )
                }
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
