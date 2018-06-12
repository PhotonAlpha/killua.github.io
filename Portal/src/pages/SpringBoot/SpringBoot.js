import React, {Component} from 'react';
import './SpringBoot.css'
import { Timeline, Icon, Spin, Row, Col } from 'antd';
import { connect } from 'react-redux';

import { getResourceTrees } from "actions/common";


class SpringBoot extends Component {
    constructor(props) {
        super(props);
        this.props.getResourceTrees();
    }


    render() {
        const { message , isLoading, errorMsg } = this.props.common;
        console.log('SpringBoot Render', this.props.common);
        return (
            <div id='SpringBoot' className='container' >
                <Timeline>
                    <Row>
                        <Timeline.Item><Icon type="caret-left" />Create a services site 2015-09-01</Timeline.Item>
                    </Row>
                    <Row>
                        <Timeline.Item><Icon type="caret-left" />Solve initial network problems 2015-09-01</Timeline.Item>
                    </Row>
                    <Row>
                        <Timeline.Item><Icon type="caret-left" />Technical testing 2015-09-01</Timeline.Item>
                    </Row>
                    <Row>
                        <Timeline.Item><Icon type="caret-left" />Network problems being solved 2015-09-01</Timeline.Item>
                    </Row>
                </Timeline>
            </div>
            
        )
    }
}

function DataTrees(props) {
    const message = props.data;
    const items = [];
    if(message && message.items && message.items.length > 0) {
        items.map(item => {
            const filename = item.name;
            filename
            return {
                name: item.name,
                path: item.path,
                git_url: item.git_url
            }
        })
    }

}


const mapStateToProps = state => {
    return {
        common: state.common,
    }
}
const mapDispatchToProps = {
    getResourceTrees,
}
export default connect(mapStateToProps, mapDispatchToProps)(SpringBoot);