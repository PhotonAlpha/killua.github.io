import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

import { Menu, Icon, Layout } from 'antd';
const Sider = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {
    state = {
      current: 'home',
    }
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }

    render() {
        return (
          <Menu theme="dark" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal' >
              <Menu.Item key="home">
                  <Link to="/"><Icon type="home" />Home</Link>
              </Menu.Item>
              <Menu.Item key="springboot">
                  <Link to="/springboot"><Icon type="coffee" />SpringBoot</Link>
              </Menu.Item>
              <Menu.Item key="springcloud">
                  <Link to="/page1"><Icon type="cloud" />SpringCloud</Link>
              </Menu.Item>
              <SubMenu title={<span><Icon type="youtube" /><span>Redios1111</span></span>}>
                  <MenuItemGroup title="WOW">
                    <Menu.Item key="redio:1"><Link to="/redios">Redios</Link></Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Learning">
                    <Menu.Item key="redio:2">Option 3</Menu.Item>
                    <Menu.Item key="redio:3">Option 4</Menu.Item>
                  </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="archives">
                  <Link to="/archives"><Icon type="hdd" />Archives</Link>
              </Menu.Item>
              <Menu.Item key="about">
                  <Link to="/about"><Icon type="dashboard" />About</Link>
              </Menu.Item>
          </Menu>
          // <ul>
          //     <li><Link to="/">Home</Link></li>
          //     <li><Link to="/page1">Page1</Link></li>
          //     <li><Link to="/counter">Counter</Link></li>
          //     <li><Link to="/userinfo">UserInfo</Link></li>
          // </ul>
        )
    }
}