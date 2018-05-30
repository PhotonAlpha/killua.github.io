import React, {Component} from 'react';
import { Button, Carousel } from 'antd';
import './Home.css';
import img1 from 'assets/whale-icon.gif'
import img2 from 'assets/full_illustration.png'
import img3 from 'assets/B2XTRwtCAAEnqlP.jpg'
import img4 from 'assets/animal-canine-cold-160843.jpg'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }
    
    render() {
        return (
            // {/* this is home~!<br/>
            // 当前计数 new：{this.state.count}<br/>
            // <Button type="primary" onClick={() => this._handleClick()}>auto plus</Button> */}
            // {/* <button onClick={() => this._handleClick()}>auto plus</button> */}
            <Carousel autoplay afterChange={this.onChange}>
                <div><img style={{ width: '100%' }} src={img3}/></div>
                <div><img style={{ width: '100%' }} src={img2}/></div>
                <div><img style={{ width: '100%' }} src={img3}/></div>
                <div><img style={{ width: '100%' }} src={img4}/></div>
            </Carousel>
        )
    }
}

