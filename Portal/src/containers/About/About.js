import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import About from 'components/About/About';
import { getAboutme } from "reducers/blogs";
import Dialogue from './Dialogue';

export class AboutContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            error: false,
            visibleCv: false,
            salt: ''
        }
    }
    
    componentWillMount() {
        this.props.getAboutme();
    }
    showDialog() {
        this.setState({
            visible: true,
            visibleCv: false,
        });
    }
    handleDialogUpdate(resumeStore){
        console.log('handleDialogUpdate', resumeStore)
        const {message , isLoading, errorMsg} = resumeStore;
        // this.setState(
        //     ...state
        // )
        console.log(!!(!errorMsg && !isLoading && message))
        if(!errorMsg && !isLoading && message){
            this.setState({
                visible: false,
                visibleCv: true,
                error: false,
                resume: message
            });
        }
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('AboutContainer', message , isLoading, errorMsg)
        return (
        <div>
            {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <About showDialog={ this.showDialog.bind(this) } state={ this.state } blogContent={ message.content } />
                )
            }
            <Dialogue state={ this.state } handleDialogUpdate={ this.handleDialogUpdate.bind(this) } />
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
