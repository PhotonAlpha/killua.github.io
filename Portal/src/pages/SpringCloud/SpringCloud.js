import React, {Component} from 'react';
import { Timeline, Button, Row, Col } from 'antd';
import './SpringCloud.css'
export default class SpringCloud extends Component {
    state = {
        reverse: false,
    }

    handleClick = () => {
        this.setState({ reverse: !this.state.reverse });
    }

    render() {
        return (
            <Row id ='SpringCloud' >
            <Col>
                <Timeline pending="Recording..." reverse={this.state.reverse}>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
                <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>Toggle Reverse</Button>
            </Col>
            </Row>
        )
    }
}

