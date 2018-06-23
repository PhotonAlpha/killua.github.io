import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import './Page1.css';
import image from 'assets/hashiqi.jpg';
import { Menu, Icon, Layout, Avatar, Breadcrumb, BackTop, Row, Col, Slider, Card, Button } from 'antd';
const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider  } = Layout;
import babaCar from 'assets/baba-car.png';
import Trianglify, { randomColor } from 'trianglify';

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};
export default class Page1 extends Component {
    
    open(event) {
        document.getElementsByClassName('pop-up')[0].classList.add('open')
    }
    close(event) {
        document.getElementsByClassName('pop-up')[0].classList.remove('open')
    }
    handleClick = () => {
        // var Trianglify = require('trianglify'); // only needed in node.js
        // var pattern = Trianglify({width: 1349, height: 378});
        // var pngURI = pattern.png();
        var colorFunc = function(x, y) {
            return 'hsl('+Math.floor(Math.abs(x*y)*360)+',80%,60%)';
        };
        
        var pngURI = Trianglify({
            width: 277,
            height: 127,
            cell_size: 35,
            // x_colors: 'random',
            y_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
            // variance: Math.random(),
            // color_function: colorFunc
          }).png();
        document.getElementById('page1').style.backgroundImage = `url(${pngURI})`;
    }
    state = {
        loading: false,
    }
    
    handleClick = () => {
        this.setState({ loading: !this.state.loading });
    }
    render() {
        return (
            <div id = 'page1' >
                <Row>
                    <Col lg={{ span:16 }}></Col>
                    <Col lg={{ span:4, offset:2 }}>
                        <Card title="Open Source" loading={this.state.loading}>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <div><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />React</div> }
                                    description="那是一种内在的东西，他们到达不了，也无法触及的"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="/">科学搬砖组</a>
                                    <span>16 分钟前</span>
                                </div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <div><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" />Bootstrap</div> }
                                    description="希望是一个好东西，也许是最好的，好东西是不会消亡的"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="/">全组都是吴彦祖</a>
                                    <span>16 分钟前</span>
                                </div>
                            
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <div><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" />Ant Design</div> }
                                    description="城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="/">中二少女团</a>
                                    <span>16 分钟前</span>
                                </div>
                            
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Meta
                                    title={ <div><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />Ant Design Pro</div> }
                                    description="城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
                                />
                                <div style={{ paddingTop: '10px' }}>
                                    <a href="/">中二少女团</a>
                                    <span>16 分钟前</span>
                                </div>
                            </Card.Grid>
                        </Card>
                        <Button onClick={this.handleClick} style={{ marginTop: 16 }}>Toggle loading</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}