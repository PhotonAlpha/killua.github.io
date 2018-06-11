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
                <h1 data-heading="Frozen">
                    Frozen
                </h1>
            </Row>
        )
    }
}

