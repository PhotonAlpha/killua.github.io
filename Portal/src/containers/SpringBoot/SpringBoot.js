import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRepositoryTree } from "reducers/blogs";
import SpringBoot from 'components/SpringBoot/SpringBoot';

export class SpringBootContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.getRepositoryTree();
    }

    _reconstructorTree(message) {
        console.log('message', message)
        const pattern = /^[0-9]{4}[-]{1}[0-9]{1,2}[-]{1}[0-9]{1,2}/;
        let blogdatas = [];
        if(message && message.items && message.items.length > 0) {
            const items = message.items;
            blogdatas = items.filter(item => {
                const name = item.name;
                const match = pattern.exec(name);
                if(match){
                    return true;
                }else{
                    return false;
                }
            }).map(item => {
                const name = item.name;
                const match = pattern.exec(name);
                const blogname = name.substring(match[0].length+1, name.length);
                return {
                    name: blogname,
                    date: Date.parse(match[0]),
                    path: item.path,
                    git_url: item.git_url
                }
            });
            console.log(blogdatas);
            blogdatas.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
        }
        return blogdatas;
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        console.log('SpringBootContainer', message , isLoading, errorMsg)
        return (
            <div>
            {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <SpringBoot repositoryTree={ this._reconstructorTree(message) } />
                )
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogStore: state.blogStore
    }
}

const mapDispatchToProps = {
    getRepositoryTree
}

export default connect(mapStateToProps, mapDispatchToProps)(SpringBootContainer)
