import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline, Button, Icon, Spin, Row, Col, Card, Avatar } from 'antd';

import './TimeLine.css';

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};
const { Meta } = Card;
export default class SpringBoot extends Component {
    static propTypes = {
        repositoryTree: PropTypes.array,
        handleClick: PropTypes.func
    }
    constructor(props) {
        super(props);
    }
    handleClick(sha, title, e) {
        if(this.props.handleClick) {
            this.props.handleClick(sha, title);
        }
    }

    render() {
        return (
            <div id='SpringBoot' className='container' >
                <Row>
                    <Col lg={{ span:24 }} xs={{ span:24 }} >
                        <Timeline>
                        {
                            this.props.repositoryTree.map((element, index) => {
                                return (
                                    <Timeline.Item key = {index} 
                                        onClick={ this.handleClick.bind(this, element.sha, element.name) } >
                                        <Icon type="caret-left" />{new Date(element.date).toISOString().slice(0, 10)} {element.name} 
                                    </Timeline.Item>
                                )
                            })
                        }
                        </Timeline>
                    </Col>
                    {/* <Col lg={{ span:5, offset:1 }} xs={{ span:0 }}>
                        <Card title="Open Source" >
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <a href='https://reactjs.org/'><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />React</a> }
                                    description="A JavaScript library for building user interfaces"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="https://github.com/facebook/react/" target="_blank" ><Icon type="github" />Portal</a>
                                </div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <a href='https://getbootstrap.com/'><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" />Bootstrap</a> }
                                    description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="https://github.com/twbs/bootstrap" target="_blank" ><Icon type="github" />Portal</a>
                                </div>
                            
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <a href='https://ant.design/index-cn' target="_blank" ><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" />Ant Design</a> }
                                    description="一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="https://github.com/ant-design/ant-design-pro/" target="_blank" ><Icon type="github" />Portal</a>
                                </div>
                            
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <a href='https://pro.ant.design/' target="_blank"><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />Ant Design Pro</a> }
                                    description="Out-of-box UI solution for enterprise applications"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="https://github.com/ant-design/ant-design-pro/" target="_blank"><Icon type="github" />Portal</a>
                                </div>
                            </Card.Grid>
                        </Card>
                    </Col> */}
                </Row>
                
            </div>
        )
    }
}
