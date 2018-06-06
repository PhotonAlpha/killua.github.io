import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import './Page1.css';
import image from 'assets/hashiqi.jpg';
import { Menu, Icon, Layout, Breadcrumb, BackTop, Row, Col, Slider } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider  } = Layout;
import babaCar from 'assets/baba-car.png';

export default class Page1 extends Component {
    
    open(event) {
        document.getElementsByClassName('pop-up')[0].classList.add('open')
    }
    close(event) {
        document.getElementsByClassName('pop-up')[0].classList.remove('open')
    }

    render() {
        return (
            <div id = 'page1' >
                <span className="swing">
                    <input  id="song" type="text" placeholder="I don't give a ****" />
                    {/* <label >盐</label> */}
                    <img src= {babaCar} alt="Car"/>
                </span>
            </div>
        )
    }
}