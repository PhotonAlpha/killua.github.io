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
import Trianglify, { randomColor } from 'trianglify';

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

    render() {
        return (
            <div id = 'page1' >
                 page1
            </div>
        )
    }
}