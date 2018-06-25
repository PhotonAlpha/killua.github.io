import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from 'components/Home/Home';
import history from 'router/history';

import backgroundPng from 'components/Utils/Utils';
import Loading from 'components/Loading/Loading';
import { getBlogIssues } from "reducers/issues";
import { getRepositoryTree } from "reducers/blogs";

export class HomeContainer extends Component {
	static propTypes = {
		getBlogIssues: PropTypes.func,
		blogStore: PropTypes.object
	}
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			message: {},
			errorMsg: ''
		}
	}
	componentWillMount() {
		this.props.getRepositoryTree().then(()=>{
			this.props.getBlogIssues();
		});
	}
	handleClick(sha, issuenumber, title, e) {
		console.log('handleClick', sha, issuenumber, title)
        const data = {
            git_url:sha,
			number: issuenumber,
			issue_title: title
        };
        const path = {  
            pathname:`/reveal/${sha}/${decodeURIComponent(title)}`,
            state:data
        }
        history.push(path);
	}

	render() {
		const {message , isLoading, errorMsg} = this.props.issueStore;
		const blogStore = {
			blog: this.props.blogStore.message
		}
		let blogList = [];
		if(Array.isArray(blogStore.blog.tree)){
			blogList = blogStore.blog.tree
				.filter(item => {
					if(item.type === "blob"){
						return true;
					}
					return false;
				})
				.map(item => {
					return {
						blogPath: item.path,
						sha: item.sha
					}
				})
		}
		// console.log('~~~~~~~~', blogList);
		let issueList = [];
		let rareList = [];
		if(Array.isArray(message)) {
			issueList= message.map(item => {
				let _abels = [];
				let blog = blogList.find(blog=>blog['blogPath'].indexOf(item.title)>-1);
				if(item.labels && item.labels.length >0){
					_abels = item.labels.map(item => item.name);
				}
				const issue = {
					git_sha: blog?blog.sha:'',
					number: item.number,
					comments_url: item.comments_url,
					created_at: item.updated_at,
					labels: _abels,
					title: item.title,
					body: item.body
				}
				if(_abels.indexOf('rare') > -1){
					rareList.push({
						...issue,
						backgroundURI: backgroundPng(323, 200, 25)
					});
				}
				return issue;
			})
		}
		return (
			<div>
				{
					isLoading? <Loading />: (
						errorMsg? errorMsg :
							<Home handleClick={ this.handleClick.bind(this) } issueList={ issueList } rareList={ rareList } />
					)
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		issueStore: state.issueStore,
		blogStore: state.blogStore
	}
}
const mapDispatchToProps = {
	  getBlogIssues,
	  getRepositoryTree
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
