import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('DockerContainer', message , isLoading, errorMsg)
        return (
            <div>
                {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <Docker repositoryTree={ _reconstructorTree(message) } />
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
