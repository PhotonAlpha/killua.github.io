import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import About from 'components/About/About';
import { getAboutme } from "reducers/blogs";

export class AboutContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        
    }
    componentWillMount = () => {
        this.props.getAboutme();
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('AboutContainer', message , isLoading, errorMsg)
        return (
        <div>
            {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <About blogContent={ message.content } />
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
    getAboutme
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)
