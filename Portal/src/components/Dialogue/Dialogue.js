import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Dialogue.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card } from 'antd';
import babaCar from 'assets/baba-car.png';

export default class Dialogue extends Component {
    static propTypes = {
        handleOk: PropTypes.func,
    };
    constructor(props){
        super(props);
        this.state = this.props.dialogues;
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.dialogues != this.props.dialogues) {
            this.setState(
                nextProps.dialogues
            )
        }
    }
    handleOk() {
        if(this.props.handleOk){
            this.props.handleOk(this.state.salt);
        }
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    emitEmpty = () => {
        this.setState({ salt: '' });
    }
    onChange = (e) => {
        this.setState({ salt: e.target.value });
    }
    
    
    render() {
        console.log('dialog~~~', this.props)
        const { visible, loading, salt } = this.state;
        const suffix = salt ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

        const {message , isLoading, errorMsg} = this.props.authorizationStore;
        console.log('Dialog', message , isLoading, errorMsg)
        return (
                <Modal
                    width = '650px'
                    style={{ top: 20, height: 350 }}
                    visible={visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>返回</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={ this.handleOk.bind(this) }>
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
                                    <input type="text" name='salt' placeholder="请输入手机号码" value={ salt } onChange={ this.onChange } />
                                    <img src= {babaCar} alt="Car"/>
                                    <span className="suffix" onClick={ this.emitEmpty } ><i className="anticon anticon-close-circle"></i></span>
                                </div>
                                <div style={{color: 'red'}}>
                                    {
                                        isLoading? 'loading......': (
                                            errorMsg? errorMsg :
                                                ''
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </Row>
                </Modal>
        )
    }
}