import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getBlogData } from "reducers/blogs";
import Reveal from 'components/Reveal/Reveal';

export class RevealContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        var data = this.props.location.state;  
        console.log('RevealContainer', data);
        const { git_url } = data;
        this.props.getBlogData(git_url);
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
    getBlogData
}

export default connect(mapStateToProps, mapDispatchToProps)(RevealContainer)
