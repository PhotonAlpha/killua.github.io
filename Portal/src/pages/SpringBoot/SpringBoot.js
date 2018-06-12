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
                <DataTrees data={ message } />
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
    console.log('DataTrees', props)
    const message = props.data;
    const items = message.items;
    const pattern = /^[0-9]{4}[-]{1}[0-9]{1,2}[-]{1}[0-9]{1,2}/;
    if(message && items && items.length > 0) {
        console.log(111111)
        const blogdatas = items.map(item => {
            const name = item.name;
            const match = pattern.exec(name);
            if(match) {
                const blogname = name.substring(match[0].length+1, name.length);
                return {
                    name: blogname,
                    date: match[0],
                    path: item.path,
                    git_url: item.git_url
                }
            }
        });
        console.log(blogdatas);
    }
    return (<div>DataTrees</div>)

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