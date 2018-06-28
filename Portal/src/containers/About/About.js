import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import About from 'components/About/About';
import Loading from 'components/Loading/Loading';
import CommentApp from '../Comment/CommentApp';
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
    handleDialogUpdate(authorizationStore){
        const {message , isLoading, errorMsg} = authorizationStore;
        // this.setState(
        //     ...state
        // )
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
        return (
        <div id='aboutPage'>
            {
                isLoading? <Loading />: (
                    errorMsg? errorMsg :
                        <About showDialog={ this.showDialog.bind(this) } state={ this.state } blogContent={ message.content } />
                )
            }
            <CommentApp specify={ true } issueNo={5} />
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
