import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'router/history';
import { postAuth } from "reducers/authorization";
import Loading from 'components/Loading/Loading';

export class Authorization extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    // https://github.com/login/oauth/authorize?client_id=22f33b7f43ec9ae6d0c9&redirect_uri=http://localhost:4200/auth?hash=ef1a1d4d44f05241c7a286cd6ee75447492a49cd
    
    
    componentWillMount() {
        console.log('componentWillMount', this.props)
        const queryParams = new URLSearchParams(this.props.location.search);
        const hash = queryParams.get('hash');
        const code = "cb59bac24a163ccfeb06";//queryParams.get('code');
        console.log(hash, code)
        if(!hash || !code){
            const path = {
                    pathname:'/404',  
                }  
                history.push(path);
        }else{
            this.props.postAuth(code).then(()=>{
                console.log('auth componentWillMount', this.props.authorizationStore)
            })
        }
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
