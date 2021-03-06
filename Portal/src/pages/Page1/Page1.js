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
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // console.log('canvas', this.canv)
        this._timer = setInterval(() => 
            this._renderTime(), 100);
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }

    degToRad(degree){
        var factor = Math.PI/180;
        return degree*factor;
    }

    _renderTime(){
        // console.log('canvas', this.canv)
        const ctx = this.canv.getContext("2d")

        ctx.strokeStyle = '#3fa0ff';
		ctx.lineWidth = 10;
		ctx.shadowBlur= 3;
        ctx.shadowColor = '#3fa0ff'
        const now = new Date();
        const today = now.toDateString();
        const time = now.toLocaleTimeString();
        const hrs = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
        const mil = now.getMilliseconds();
        const smoothsec = sec+(mil/1000);
        const smoothmin = min+(smoothsec/60);
        // console.log(mil, smoothsec, smoothmin)

        //Background
        let gradient = ctx.createRadialGradient(125, 125, 5, 125, 125, 150);
        gradient.addColorStop(0, "#6dd5ed");
        gradient.addColorStop(1, "#e9e9e9");//#e9e9e9
        
        ctx.fillStyle = gradient;
        //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
        ctx.fillRect(0, 0, 250, 250);
        //Hours
        ctx.beginPath();
        ctx.arc(125,125,100, this.degToRad(270), this.degToRad((hrs*30)-90));
        ctx.stroke();
        //Minutes
        ctx.beginPath();
        ctx.arc(125,125,85, this.degToRad(270), this.degToRad((smoothmin*6)-90));
        ctx.stroke();
        //Seconds
        ctx.beginPath();
        ctx.arc(125,125,70, this.degToRad(270), this.degToRad((smoothsec*6)-90));
        ctx.stroke();
        //Date
        ctx.font = "13px Helvetica";
        ctx.fillStyle = 'black'
        ctx.fillText(today, 67, 125);
        //Time
        ctx.font = "13px Helvetica Bold";
        ctx.fillStyle = 'black';
        ctx.fillText(time, 67, 140);

    }
    
    render() {
        console.log('render')
        // this.renderTime()
        return (
            <div id = 'page1' >
                <canvas ref={ (canv)=>this.canv=canv } id="canvas" width="250" height="250" >ccc</canvas>
            </div>
        )
    }
}