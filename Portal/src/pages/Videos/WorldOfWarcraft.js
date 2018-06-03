import React, {Component} from 'react';

export default class WorldOfWarcraft extends Component {
    render() {
        return (
            <div className="VideoPane-bg">
                <video className="" src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/8DRNQWMHYGK51522889992206.mp4" data-src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/8DRNQWMHYGK51522889992206.mp4" loop="loop" muted="muted" autoPlay="autoplay" playsInline="playsinline">
                </video>
                {/* <div class="VideoPane-overlay">
                </div>
                <div class="VideoPane-fallback" style="background-image: url('https://bnetcmsus-a.akamaihd.net/cms/template_resource/2s/2SZV67PP7FC41510083813775.jpg');">
                </div> */}
            </div>
        )
    }
}