import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
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
            // const duration = (+Date.now() - new Date(date)) / 1000;
            // let timeString = duration > 60
            //       ? `${Math.round(duration / 60)} 分钟前`
            //       : `${Math.round(Math.max(duration, 1))} 秒前`
            // return timeString

            const minute = 1000 * 60;
            const hour = minute * 60;
            const day = hour * 24;
            const halfamonth = day * 15;
            const month = day * 30;
            const now = new Date().getTime();
            const diffValue = +Date.now() - new Date(date);
            if(diffValue < 0){return;}
            const monthC =diffValue/month;
            const weekC =diffValue/(7*day);
            const dayC =diffValue/day;
            const hourC =diffValue/hour;
            const minC =diffValue/minute;
            let timeString = '';
            if(monthC>=1){
                timeString = `${Math.round(monthC)} months ago`
            }else if(weekC>=1){
                timeString = `${Math.round(weekC)} weeks ago`
            }else if(dayC>=1){
                timeString = `${Math.round(dayC)} days ago`
            }else if(hourC>=1){
                timeString = `${Math.round(hourC)} hours ago`
            }else if(minC>=1){
                timeString = `${Math.round(minC)} minutes ago`
            }else{
                return "刚刚";
            }
            return ` commented ` + timeString;
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
            <div id='comment-list' className=''>
                <List
                    itemLayout="horizontal"
                    dataSource={ this.props.comments }
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        
                        avatar={<Avatar size="large" src={item.user.avatar_url} />}
                        title={<div><strong><a href={ item.user.html_url }>{item.user.login}</a></strong> {this._updateTimeString(item.updated_at)}</div> }
                        description={ <ReactMarkdown source={ item.body } />  }
                        />
                    </List.Item>
                    )}
                />    
            </div>
        );
    }
}

export default CommentList;