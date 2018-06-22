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
    
    componentWillMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        const param = queryParams.get('hash');
        const hashArray = param.split('title=');
        const hash = hashArray[0];
        const title = hashArray[1];
        const code = queryParams.get('code');
        if(!hash || !code || !title){
            const path = {
                pathname:'/404',  
            }  
            history.push(path);
        }else{
            this.props.postAuth(code).then(()=>{
                const queryParams = new URLSearchParams(this.props.authorizationStore.message)
                const access_token = queryParams.get('access_token');
                if(!access_token){
                    //to 404
                    const path = {
                        pathname:'/404',  
                    }  
                    history.push(path);
                }else{
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
