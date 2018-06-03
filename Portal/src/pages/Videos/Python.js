import React, {Component} from 'react';
import './Videos.css'

// let player, card, play, video, close;

export default class Python extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    //Shine effect
    mouseMove(event) {
        const x = this.pageX - this.offsetLeft;
        const y = this.pageY - this.offsetTop;
        const card = document.querySelector( '.card' );
        card.style.setProperty( '--x', x + 'px' );
        card.style.setProperty( '--y', y + 'px' );
    }

    // // Youtube API
    onYouTubePlayerAPIReady() {
        player = new YT.Player('video', {
            events: {
            'onReady': onPlayerReady
            }
        });
    }
    componentDidMount() {
        console.log('componentDidMount',document.querySelector( '.card' ))
        let player, card = document.querySelector( '.card' ),
        play = document.querySelector( '.card__play' ),
        video = document.querySelector( '.card__video' ),
		close = document.querySelector( '.close' );
        // Shine effect
        card.addEventListener('onmousemove', this.mouseMove);
        play.addEventListener('click', function() {
            card.classList.add( 'video-is-open' );
            setTimeout(function() {
                video.style.display = 'block';
                close.style.display = 'block';
                player.playVideo();
            }, 500);
        });
        close.addEventListener( 'click', function() {
            player.pauseVideo();
            player.seekTo(0);
            video.style.display = 'none';
            close.style.display = 'none';
            card.classList.remove( 'video-is-open' );
        });
        // Inject YouTube API script
        var tag = document.createElement('script');
        tag.src = "//www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount',)
        let player, card = document.querySelector( '.card' ),
        play = document.querySelector( '.card__play' ),
        video = document.querySelector( '.card__video' ),
        close = document.querySelector( '.close' );
        card.removeEventListener('onmousemove');
        play.removeEventListener('click');
        close.removeEventListener('click');
    }
    
    render() {
        return (
            <div id='python' >
                <div className="card">
                    <div className="card__play"></div>
                    <div className="card__video" onClick={this.onPlayerReady} >
                        <iframe id="video" src="https://www.youtube.com/embed/JE9z-gy4De4?enablejsapi=1&amp;html5=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0" autoPlay="autoplay" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                    </div>
                </div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <div className="close">Close video</div>
            </div>
        )
    }
}