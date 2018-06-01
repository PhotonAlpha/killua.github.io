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
            <div class="container">
                <div class="slider-containers">
                    <div class="slider-container">
                        <h2>Effect #2</h2>
                        <div class="flexbox-slider flexbox-slider-2">
                            <div class="flexbox-slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-1.jpg" alt="Slide Image"/>
                                <div class="text-block">
                                    <h3>Slide #1 is here</h3>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flexbox-slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-2.jpg" alt="Slide Image"/>
                                <div class="text-block">
                                    <h3>Slide #2 is here</h3>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flexbox-slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-3.jpg" alt="Slide Image"/>
                                <div class="text-block">
                                    <h3>Slide #3 is here</h3>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flexbox-slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-4.jpg" alt="Slide Image"/>
                                <div class="text-block">
                                    <h3>Slide #4 is here</h3>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flexbox-slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-9.jpg" alt="Slide Image"/>
                                <div class="text-block">
                                    <h3>Slide #5 is here</h3>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

