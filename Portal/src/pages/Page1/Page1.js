import React, {Component} from 'react';
import './Page1.css';
import image from './images/hashiqi.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is Page1~Hot
                <img src={image}/>
            </div>
        )
    }
}