import React, {Component} from 'react';
import './SpringBoot.css'
import { Timeline, Icon, Spin, Row, Col } from 'antd';

export default class SpringBoot extends Component {
    render() {
        // const antIcon = ;

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

  
