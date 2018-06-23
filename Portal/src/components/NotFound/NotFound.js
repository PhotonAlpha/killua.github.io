
import React, {Component} from 'react';
import { Row, Col, Icon } from 'antd';
import {Link} from 'react-router-dom';
import './NotFound.css';

export default class NotFound extends Component {

    render() {
        return (
            <div id='not-found' >
                <Row >
                    <Col style={{ textAlign: 'center' }} span={12} >
                        <img alt="404" src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" />
                    </Col>
                    <Col span={12}>
                        <h1>404</h1>
                        <div className="desc___3G5g3">抱歉，你访问的页面不存在</div>
                        <div className="actions___1lAdW">
                            <button type="button" className="ant-btn ant-btn-primary">
                                {/* <span>返回首页</span> */}
                                <Link to="/"><Icon type="home" />返回首页</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}