import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getBlogData, searchBlogByIssues } from "reducers/blogs";
import Reveal from 'components/Reveal/Reveal';

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
        var data = this.props.location.state;  
        const { git_url, issue_title } = data;
        console.log('RevealContainer componentWillMount', data);
        if(issue_title){
            this.props.searchBlogByIssues(issue_title)
                .then(() => {
                    console.log('componentWillMount', this.props)
                })
        }else if(git_url){
            this.props.getBlogData(git_url);
        }
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('RevealContainer', message , isLoading, errorMsg)
        return (
            <div  id='reveal'>
                {
                    isLoading? 'loading......': (
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
        blogStore: state.blogStore
    }
}

const mapDispatchToProps = {
    getBlogData,
    searchBlogByIssues
}

export default connect(mapStateToProps, mapDispatchToProps)(RevealContainer)
