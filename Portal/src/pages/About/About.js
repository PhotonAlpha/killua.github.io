import React, {Component} from 'react';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <nav>
            <ul className="menu">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Contact</a></li>
              <li><a href="#!">Faq</a></li>
            </ul>
          </nav>
        )
    }
}