
import React, {Component} from 'react';
import './Loading.css'

export default class Loading extends Component {
    render() {
        return (
            <div id="loading" >
                <h1>Cooking in progress..</h1>
                <div id="cooking">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div id="area">
                        <div id="sides">
                            <div id="pan"></div>
                            <div id="handle"></div>
                        </div>
                        <div id="pancake">
                            <div id="pastry"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}