import React, {Component} from 'react';
import { Menu, Icon, Layout } from 'antd';
import './Docker.css'

export default class Docker extends Component { 
    render() {
        return (
            <div id = 'docker' className="container">
                <div className="grid_4">
                    <section className="box widget locations">
                    <div className="avatar">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6035/scrtpxls_location.png" />
                    </div>
                    <div className="details">
                        <h2>De Westerkerk</h2>
                        <p>Prinsengracht 281</p>
                        <a href="#" className="btn btn-primary btn-block btn-large">view on maps</a>
                    </div>
                    </section>
                    <section className="box widget calendar">
                    <header className="header">
                        <h2>Saturday</h2>
                        <p>
                        <span className="icon-arrow-left"></span>January
                        <span className="icon-arrow-right"></span>
                        </p>
                    </header>
                    <article className="days">
                        <ul>
                        <li className="previous">30</li>
                        <li className="previous">31</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                        <li className="next">1</li>
                        <li className="next">2</li>
                        </ul>
                    </article>
                    </section>
                </div>
                <div className="grid_8">
                    <nav className="box nav">
                    <ul>
                        <li>
                        <a href="#">
                            <Icon type="home" />
                            <br />
                            <span className="title">Home</span>
                        </a>
                        </li>
                        <li>
                        <a href="">
                            <span className="icon-images"></span>
                            <br />
                            <span className="title">Gallery</span>
                        </a>
                        </li>
                        <li>
                        <a href="">
                            <span className="icon-bubble"></span>
                            <br />
                            <span className="title">Message</span>
                        </a>
                        </li>
                        <li>
                        <a href="">
                            <span className="icon-music"></span>
                            <br />
                            <span className="title">Music</span>
                        </a>
                        </li>
                        <li>
                        <a href="">
                            <span className="icon-search"></span>
                            <br />
                            <span className="title">Search</span>
                        </a>
                        </li>
                        <li>
                        <a href="">
                            <span className="icon-cog"></span>
                            <br />
                            <span className="title">Settings</span>
                        </a>
                        </li>
                        <li>
                        <a href="">
                            <span className="icon-location"></span>
                            <br />
                            <span className="title">Location</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                    <div className="inner_container">
                    <div className="col_1of3">
                        <section className="box widget video">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6035/scrtpxls_video.png" alt="" />
                        </section>
                        <section className="box widget weather">
                        <header className="header">
                            <div className="temp">10&#176;
                            <span className="icon-brightness-half"></span>
                            </div>
                            <span className="icon-partlycloudy"></span>
                        </header>
                        <article>
                            <h2>Saturday 16 January</h2>
                        </article>
                        </section>
                    </div>
                    <div className="col_2of3">
                        <article className="box post">
                        <div className="image">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6035/scrtpxls_post.png" />
                        </div>
                        <div className="details">
                            <h2>Amsterdan</h2>
                            <p>Amsterdam is the capital city of and the most populous within the Kingdom of the Netherlands. Amsterdam's name
                            derives from Amstelredamme. Amsterdam is located in the western... Netherlands</p>
                        </div>
                        </article>
                    </div>
                    <div className="col_2of3">
                        <section className="box widget audio">
                        <div className="image">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6035/scrtpxls_audio.png" />
                        </div>
                        <div className="details">
                            <h2 className="album">Geef mij maar Amsterdam</h2>
                            <p className="artist">Johnny Jordaan</p>
                            <div className="player">
                            <div className="bar">
                                <div className="progress" data-time="1:45"></div>
                            </div>
                            <div className="actions">
                                <a href="#" className="btn">
                                <span className="icon-arrow-left"></span>
                                </a>
                                <a href="#" className="btn btn-primary">
                                <span className="icon-pause"></span>
                                </a>
                                <a href="#" className="btn">
                                <span className="icon-arrow-right"></span>
                                </a>
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="col_1of3">
                        <section className="box widget find">
                        <input type="text" name="find" placeholder="Find your city place" />
                        <label htmlFor="favorite" className="checkbox">
                            <input type="checkbox" id="favorite" name="favorite" /> Add to favorites
                        </label>
                        <a href="#" className="btn btn-primary btn-large btn-block">Search</a>
                        </section>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}