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
                <Layout>
                    <Sider
                    width={399}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="home">
                                <Link to="/"><Icon type="home" />Home</Link>
                            </Menu.Item>
                            <Menu.Item key="springboot">
                                <Link to="/springboot"><Icon type="coffee" />SpringBoot</Link>
                            </Menu.Item>
                            <Menu.Item key="springcloud">
                                <Link to="/springcloud"><Icon type="cloud" />SpringCloud</Link>
                            </Menu.Item>
                            <Menu.Item key="docker">
                                <Link to="/docker"><Icon type="hdd" />Docker</Link>
                            </Menu.Item>
                            <SubMenu title={<span><Icon type="youtube" /><span>Videos</span></span>}>
                                <MenuItemGroup title="Games">
                                    {/* <Menu.Item key="redio:1"><Link to="/wow">wow</Link></Menu.Item> */}
                                    <Menu.Item key="redio:1"  >GraphQL</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Learning">
                                    <Menu.Item key="redio:2"   >高等数学</Menu.Item>
                                    <Menu.Item key="redio:3"   >考研</Menu.Item>
                                    {/* <Menu.Item key="redio:4" ><Link to="/python">Python</Link></Menu.Item> */}
                                    <Menu.Item key="redio:4"  ></Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="archives"  >
                                <Link to="/archives"><Icon type="hdd" />Archives</Link>
                                {/* <Icon type="hdd" />Archives   */}
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about"><Icon type="dashboard" />About</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}