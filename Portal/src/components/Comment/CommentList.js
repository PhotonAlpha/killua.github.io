import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

const data = [
    {
      title: 'LiYe107 commented 7 days ago',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
];
  
class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    constructor(props) {
        super(props);
    }
    _updateTimeString(date) {
        if(date){
            const duration = (+Date.now() - new Date(date)) / 1000;
            let timeString = duration > 60
                  ? `${Math.round(duration / 60)} 分钟前`
                  : `${Math.round(Math.max(duration, 1))} 秒前`
            return timeString
        }else{
            return ''
        }
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    

    render() {

        return (
            <div id='comment-list'>
                <List
                    itemLayout="horizontal"
                    dataSource={ this.props.comments }
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        
                        avatar={<Avatar size="large" src={item.user.avatar_url} />}
                        title={<a href={ item.user.html_url }>{item.user.login} {this._updateTimeString(item.updated_at)} </a>}
                        description={ item.body }
                        />
                    </List.Item>
                    )}
                />    
            </div>
        );
    }
}

export default CommentList;