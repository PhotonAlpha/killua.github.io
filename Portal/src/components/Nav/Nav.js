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
    //   console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
    render() {
        const pathname = window.location.pathname;
        const currentkey = pathname.replace('/','')?pathname.replace('/',''):'home';
        this.state = {
            current: currentkey
        }

        return (
          <Menu defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal' >
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
                    <Menu.Item key="redio:1"><Link to="/wow">wow</Link></Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Learning">
                    <Menu.Item key="redio:2">高等数学</Menu.Item>
                    <Menu.Item key="redio:3">考研</Menu.Item>
                    <Menu.Item key="redio:4"><Link to="/python">Python</Link></Menu.Item>
                  </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="archives">
                  <Link to="/archives"><Icon type="hdd" />Archives</Link>
              </Menu.Item>
              <Menu.Item key="about">
                  <Link to="/about"><Icon type="dashboard" />About</Link>
              </Menu.Item>
          </Menu>
        )
    }
}