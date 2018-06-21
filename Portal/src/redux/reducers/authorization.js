import { Base64 } from 'js-base64';
const GET_AUTH_REQUEST = "auth/GET_RESUME_REQUEST";
const GET_AUTH_SUCCESS = "auth/GET_RESUME_SUCCESS";
const GET_AUTH_FAIL = "auth/GET_RESUME_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('resume reducer', state, action)
    switch (action.type) {
        case GET_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                message: action.result,
                errorMsg: '请求错误'
            }  
        default:
            return state
    }
}

export function getResumeInfo() {
    const result = {
        types: [GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_AUTH_FAIL],
        promise: client => client.get(`http://localhost:4200/api/resume.json`)
    }
    return result;
}
export function postAuth(code) {
    const payload ={
        code: code,
        client_id: Base64.decode(CLIENT_ID),
        client_secret: Base64.decode(CLIENT_SECRET)
    }
    const content = JSON.stringify(payload);
    console.log('postAuth', code, JSON.stringify(payload))
    const result = {
        types: [GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_AUTH_FAIL],
        promise: client => client.post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token", content)
    }
    return result;
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };

}
const CLIENT_ID = "MjJmMzNiN2Y0M2VjOWFlNmQwYzk=";
const CLIENT_SECRET = "Mjg4OTc5OTI1NjE4MDZjMTFkYmYxNGYyMzFkYzZjMzFhZmE5ODVlNQ==";