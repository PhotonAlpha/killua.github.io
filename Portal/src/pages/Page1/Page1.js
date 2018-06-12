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
                 <div className="container">
                    <div className="box">
                        <p>Trianglify is a javascript library for generating colorful triangle meshes that can be used as SVG images and CSS backgrounds.</p>
                        <p>Trianglify is open source software. Check it out on <a href="https://github.com/qrohlf/trianglify">Github</a>!</p>
                        <p>Made by <a href="http://qrohlf.com/">Quinn Rohlf</a></p>
                        <p>
                            <a  id="button" onClick={this.handleClick}  className="btn box">Click for a new pattern</a>
                            <a href="#" id="saveas" target="_blank" className="download btn box" title="right click > save as svg" download="trianglify-background.svg">SVG</a>
                        </p>
                        <div id="controls" className="hidden">
                            <ul>
                                <li>Noise: <a href="#" id="subtractnoise" className="btn box small">-</a><span id="noise">0</span><a href="#" id="addnoise" className="btn box small">+</a></li>
                                <li>Cellsize: <a href="#" id="subtractcellsize" className="btn box small">-</a><span id="cellsize">0</span><a href="#" id="addcellsize" className="btn box small">+</a></li>
                                <li>Cellpadding: <a href="#" id="subtractcellpadding" className="btn box small">-</a><span id="cellpadding">0</span><a href="#" id="addcellpadding" className="btn box small" title="cellpadding must be smaller than cellsize/2">+</a></li>
                            </ul>
                            <p>Note: noise effect will cause rendering to take longer</p>
                        </div>
                        <p>
                            <a href="#" id="togglecontrols" className="btn box small">show controls</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}