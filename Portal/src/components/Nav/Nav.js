import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

import { Menu, Icon } from 'antd';

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
            <Menu theme='dark' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal' >
              <Menu.Item key="home">
                <Link to="/"><Icon type="mail" />Home</Link>
              </Menu.Item>
              <Menu.Item key="page1">
                <Link to="/page1"><Icon type="appstore" />page1</Link>
              </Menu.Item>
              <Menu.Item key="counter">
                <Link to="/counter"><Icon type="appstore" />counter</Link>
              </Menu.Item>
              <Menu.Item key="userinfo">
                <Link to="/userinfo"><Icon type="appstore" />userinfo</Link>
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