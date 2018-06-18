import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getBlogData } from "actions/common";
import Reveal from 'components/Reveal/Reveal';

export class RevealContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        var git_url = this.props.location.state;  
        console.log('RevealContainer', git_url)
        this.props.getBlogData(git_url);
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;

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
