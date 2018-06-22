import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'router/history';
import { Base64 } from 'js-base64';

import { postAuth } from "reducers/authorization";
import Loading from 'components/Loading/Loading';

export class Authorization extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    // https://github.com/login/oauth/authorize?client_id=22f33b7f43ec9ae6d0c9&scope=public_repo&redirect_uri=http://localhost:4200/auth?hash=ef1a1d4d44f05241c7a286cd6ee75447492a49cdtitle=JUU3JUFDJUFDJUU0JUI4JTgwJUU3JUFGJTg3JUU1JThEJTlBJUU2JTk2JTg3
    // f9ab1ce4903da746893866fd75c24b7dcf53c72c
    
    componentWillMount() {
        console.log('componentWillMount', this.props)
        const queryParams = new URLSearchParams(this.props.location.search);
        const param = queryParams.get('hash');
        const hashArray = param.split('title=');
        console.log(hashArray)
        const hash = hashArray[0];
        const title = hashArray[1];
        const code = queryParams.get('code');
        console.log(hash, code, title)
        if(!hash || !code || !title){
            const path = {
                pathname:'/404',  
            }  
            history.push(path);
        }else{
            this.props.postAuth(code).then(()=>{
                console.log('auth componentWillMount', this.props.authorizationStore)
                const queryParams = new URLSearchParams(this.props.authorizationStore.message)
                const access_token = queryParams.get('access_token');
                if(!access_token){
                    //to 404
                    const path = {
                        pathname:'/404',  
                    }  
                    history.push(path);
                }else{
                    console.log('result', access_token);
                    this._saveToken(access_token);
                    const data = {
                        git_url:hash,
                        issue_title: decodeURIComponent(Base64.decode(title))
                    };
                    const path = {  
                        pathname:'/reveal',  
                        state:data
                    }
                    history.push(path);
                }
            })
        }
    }
    _saveToken(token) {
        localStorage.setItem('GT_ACCESS_TOKEN', token);
    }
    
    render() {
        const {message , isLoading, errorMsg} = this.props.authorizationStore;
        console.log('auth', message , isLoading, errorMsg)
        return (
            <div>
                {
                    isLoading? <Loading />: (
                        errorMsg? errorMsg :
                            'success'
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authorizationStore: state.authorizationStore
    }
}

const mapDispatchToProps = {
    postAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
