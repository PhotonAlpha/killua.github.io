import React, {Component} from 'react';
import './Dialogue.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card } from 'antd';

export default class Dialogue extends Component {
    constructor(props){
        super(props);
        // console.log('Dialogue', props);
        this.state = this.props.dialogues;
    }
    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps', nextProps.dialogues, this.props.dialogues)
        if(nextProps.dialogues != this.props.dialogues) {
            this.setState(
                nextProps.dialogues
            )
        }
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;
        return (
            <Modal
                visible={visible}
                title="Title"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>返回</Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                    确定
                    </Button>,
                ]}
            >
                <Row id = 'dialog' >
                    <Col xs = {{span: 14}} className = 'salt-img' >
                        
                    </Col>
                    <Col xs = {{span: 10}}>
                        <Input placeholder = "撒点盐" className = 'input-salt' />
                    </Col>
                </Row>
            </Modal>
        )
    }
}