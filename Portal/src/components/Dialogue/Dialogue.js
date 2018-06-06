import React, {Component} from 'react';
import './Dialogue.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card } from 'antd';
import babaCar from 'assets/baba-car.png';

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
                    width = '650px'
                    style={{ top: 20, height: 350 }}
                    visible={visible}
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
                        <div className="pop-up">
                            <div className="content">
                                <div className="dots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <img src= {babaCar} alt="Car"/>
                                {/* <div className="title">
                                    <h1>Salt</h1>
                                </div> */}
                                <div className="subscribe swing">
                                    <input type="text" placeholder="请输入盐"/>
                                    <img src= {babaCar} alt="Car"/>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Modal>
        )
    }
}