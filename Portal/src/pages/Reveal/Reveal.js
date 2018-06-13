import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogData } from "actions/common";

class Reveal extends Component {
    constructor(props) {
        super(props);
        var data = this.props.location.state;  
        console.log('Reveal', data)
        this.props.getBlogData(data);
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.common;
        console.log('Reveal render', this.props);
        return (
            <div className='container-fluid'>
                Reveal
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        common: state.common,
    }
}
const mapDispatchToProps = {
    getBlogData,
}
export default connect(mapStateToProps, mapDispatchToProps)(Reveal);