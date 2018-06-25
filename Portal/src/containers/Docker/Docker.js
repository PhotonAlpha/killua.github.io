import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'router/history';

import { getCatalogTree } from "reducers/blogs";
import Docker from 'components/TimeLine/TimeLine';
import { DOCKER, _reconstructorTree } from 'components/Utils/Utils';

export class DockerContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('componentWillMount', DOCKER)
        this.props.getCatalogTree(DOCKER);
    }
    handleClick(sha, title, e) {
        // console.log(url, this.props);
        const data = {
            git_url:sha,
            issue_title: title
        };
        const path = {  
            pathname:`/reveal/${sha}/${decodeURIComponent(title)}`,
            state:data
        }
        history.push(path);
    }
    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('DockerContainer', message , isLoading, errorMsg)
        return (
            <div>
                {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <Docker handleClick={ this.handleClick.bind(this) }  repositoryTree={ _reconstructorTree(message) } />
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
    getCatalogTree
}

export default connect(mapStateToProps, mapDispatchToProps)(DockerContainer)
