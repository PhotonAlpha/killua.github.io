import React, {Component} from 'react';
import './Page1.css';
import image from 'assets/hashiqi.jpg';

export default class Page1 extends Component {
    render() {
        console.log('page');
        return (
            <div className="page-box">
                this is Page1~Hot
                <img src={image}/>
            </div>
        )
    }
}