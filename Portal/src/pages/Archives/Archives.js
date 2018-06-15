import React, {Component} from 'react';
import './Archives.css';
import CommentApp from 'components/Comment/CommentApp';

export default class Archives extends Component {
    render() {
        return (
            <div className="container">
                <CommentApp />
            </div>
        )
    }
}