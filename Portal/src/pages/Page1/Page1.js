import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import './Page1.css';
import image from 'assets/hashiqi.jpg';
import { Menu, Icon, Layout, Breadcrumb, BackTop, Row, Col, Slider } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider  } = Layout;

export default class Page1 extends Component {
    
    render() {
        return (
            <div className='ant-layout-header'>
                <div className="ribbon">
                    CSS Animated Ribbon
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
    
                <p>click to see animation</p>
                <h1 className="banner">A Simple CSS Banner</h1>
            </div>
        )
    }
}