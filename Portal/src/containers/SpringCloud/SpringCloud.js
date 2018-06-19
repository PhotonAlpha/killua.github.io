import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCatalogTree } from "reducers/blogs";
import SpringCloud from 'components/TimeLine/TimeLine';
import { SPRING_CLOUD, _reconstructorTree } from 'components/Utils/Utils';

export class SpringCloudContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('componentWillMount', SPRING_CLOUD)
        this.props.getCatalogTree(SPRING_CLOUD);
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('SpringBootContainer', message , isLoading, errorMsg)
        return (
            <div>
                {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <SpringCloud repositoryTree={ _reconstructorTree(message) } />
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

export default connect(mapStateToProps, mapDispatchToProps)(SpringCloudContainer)
