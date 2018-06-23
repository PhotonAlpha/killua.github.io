import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import history from 'router/history';
import { getRepositoryTree } from "reducers/blogs";
import Archives from 'components/TimeLine/TimeLine';
import { _reconstructorTree } from 'components/Utils/Utils';

export class ArchivesContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.getRepositoryTree();
    }
    handleClick(sha, title, e) {
        // console.log(url, this.props);
        const data = {
            git_url:sha,
            issue_title: title
        };
        const path = {  
            pathname:'/reveal',  
            state:data
        }
        history.push(path);
    }
    
    

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        let blogArray = [];
        if(message && Array.isArray(message.tree) && message.tree.length>0) {
            blogArray = message.tree
                .filter(item => item.type === 'blob' ? true: false)
                .map(item => {
                    return {
                        name: item.path.split('/').pop(),
                        sha: item.sha,
                        git_url: item.url,
                        path: item.path
                    }
                });
        }
        console.log('blogArray', blogArray)
        return (
            <div>
            {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <Archives handleClick={ this.handleClick.bind(this) } repositoryTree={ _reconstructorTree(blogArray) } />
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
    getRepositoryTree
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivesContainer)
