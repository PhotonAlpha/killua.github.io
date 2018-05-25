import React, {Component} from 'react';
import { Button, Carousel } from 'antd';
import './Home.css';

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
            <div>
                this is home~!<br/>
                当前计数 new：{this.state.count}<br/>
                <Button type="primary" onClick={() => this._handleClick()}>auto plus</Button>
                {/* <button onClick={() => this._handleClick()}>auto plus</button> */}

                <Carousel afterChange={this.onChange}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
                <div>1</div><br/>
            </div>
        )
    }
}

