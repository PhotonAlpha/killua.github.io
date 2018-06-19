import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialogue from 'components/Dialogue/Dialogue';
import DialogueCV from 'components/Dialogue/Dialogue.CV';
import { getResumeInfo } from "reducers/resume";

export class DialogueContainer extends Component {
    static propTypes = {
        state: PropTypes.object,
        handleDialogUpdate: PropTypes.func
    }
    constructor(props) {
        super(props);
        // console.log('constructor', props);
    }

    handleOk(saltVal) {
        // console.log('handleOk saltVal', saltVal, this.props.handleOk);
        this.props.getResumeInfo().then(() => {
            // console.log('object', this.props.resumeStore)
            const {message , isLoading, errorMsg} = this.props.resumeStore;
            if(this.props.handleDialogUpdate){
                this.props.handleDialogUpdate(this.props.resumeStore);
            }
        })
    }

    render() {
        // console.log('111', this.props.state)
        return (
            <div>
                <Dialogue resumeStore={ this.props.resumeStore } dialogues={ this.props.state } handleOk={ this.handleOk.bind(this) } />
                <DialogueCV dialogues={ this.props.state } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resumeStore: state.resumeStore
    }
}

const mapDispatchToProps = {
    getResumeInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogueContainer)
