import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialogue from 'components/Dialogue/Dialogue';
import DialogueCV from 'components/Dialogue/Dialogue.CV';
import { getResumeInfo } from "reducers/authorization";

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
            const {message , isLoading, errorMsg} = this.props.authorizationStore;
            if(this.props.handleDialogUpdate){
                this.props.handleDialogUpdate(this.props.authorizationStore);
            }
        })
    }

    render() {
        // console.log('111', this.props.state)
        return (
            <div>
                <Dialogue authorizationStore={ this.props.authorizationStore } dialogues={ this.props.state } handleOk={ this.handleOk.bind(this) } />
                <DialogueCV dialogues={ this.props.state } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authorizationStore: state.authorizationStore
    }
}

const mapDispatchToProps = {
    getResumeInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogueContainer)
