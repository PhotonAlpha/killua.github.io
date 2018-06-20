import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommentList from 'components/Comment/CommentList';
import { initComments, deleteComment } from 'reducers/comments';

class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        deleteComment: PropTypes.func

    };
    static defaultProps = {
        comments: []
    }
    constructor(props) {
        super(props);
        console.log('commentContainer', props)
    }

    render() {
        return (
            <CommentList comments={ this.props.comments } 
                />
        );
    }
}
export default CommentListContainer;