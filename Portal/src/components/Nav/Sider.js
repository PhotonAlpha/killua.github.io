import React, { Component } from 'react'
import { Layout, Breadcrumb, BackTop, Icon, Menu, Row, Col } from 'antd';
import './Nav.css'
const { Header, Content, Footer, Sider  } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SiderComponent extends Component {
    render() {
        return (
        <div id='sider'>
            <Sider 
                    width={399}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="home">
                            <Icon type="home" />Home
                        </Menu.Item>
                        <Menu.Item key="springboot">
                            <Icon type="coffee" />SpringBoot
                        </Menu.Item>
                        <Menu.Item key="springcloud">
                            <Icon type="cloud" />SpringCloud
                        </Menu.Item>
                        <Menu.Item key="docker">
                            <Icon type="hdd" />Docker
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
                            <Icon type="hdd" />Archives
                            {/* <Icon type="hdd" />Archives   */}
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Icon type="dashboard" />About
                        </Menu.Item>
                    </Menu>
                </Sider>
        </div>
        )
    }
}
