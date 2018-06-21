import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCatalogTree } from "reducers/blogs";
import SpringBoot from 'components/TimeLine/TimeLine';
import { SPRING_BOOT, _reconstructorTree } from 'components/Utils/Utils';

export class SpringBootContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        console.log('componentWillMount', SPRING_BOOT)
        this.props.getCatalogTree(SPRING_BOOT);
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('SpringBootContainer', message , isLoading, errorMsg)
        return (
            <div>
            {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <SpringBoot repositoryTree={ _reconstructorTree(message) } />
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

export default connect(mapStateToProps, mapDispatchToProps)(SpringBootContainer)
