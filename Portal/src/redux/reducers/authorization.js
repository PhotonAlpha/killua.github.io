import { Base64 } from 'js-base64';
import { TEMP_TOKEN_AUTH, CLIENT_ID, CLIENT_SECRET } from 'components/Utils/Utils';

const GET_AUTH_REQUEST = "auth/GET_RESUME_REQUEST";
const GET_AUTH_SUCCESS = "auth/GET_RESUME_SUCCESS";
const GET_AUTH_FAIL = "auth/GET_RESUME_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
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
                message: action.error.response.data,
                errorMsg: action.error.response.status+' Bad Request!'
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
export function getUserInfo(privKey = false) {
    // console.log('getUserInfo', privKey)
    let config= {
        headers: {
            'Authorization': `token `+localStorage.getItem('GT_ACCESS_TOKEN')
        }
    }
    if(privKey) {
        config= {
            headers: {
                'Authorization': `token `+TEMP_TOKEN_AUTH
            }
        }
    }
    const result = {
        types: [GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_AUTH_FAIL],
        promise: client => client.get(GET_USERINFO, config)
    }
    return result;
}
export function postAuth(code) {
    const payload ={
        code: code,
        client_id: Base64.decode(CLIENT_ID),
        client_secret: Base64.decode(CLIENT_SECRET)
    }
    const content = `code=${code}&client_id=${Base64.decode(CLIENT_ID)}&client_secret=${Base64.decode(CLIENT_SECRET)}`;
    // console.log('postAuth', content)
    const result = {
        types: [GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_AUTH_FAIL],
        promise: client => client.post(POST_AUTH, content)
    }
    return result;
}
const POST_AUTH = `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`;
const GET_USERINFO = `https://api.github.com/user`;