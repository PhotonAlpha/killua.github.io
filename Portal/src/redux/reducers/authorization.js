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
    const content = `code=${code}&client_id=${Base64.decode(CLIENT_ID)}&client_secret=${Base64.decode(CLIENT_SECRET)}`;
    console.log('postAuth', content)
    const result = {
        types: [GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_AUTH_FAIL],
        promise: client => client.post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token", content)
    }
    return result;
}
const CLIENT_ID = "MjJmMzNiN2Y0M2VjOWFlNmQwYzk=";
const CLIENT_SECRET = "Mjg4OTc5OTI1NjE4MDZjMTFkYmYxNGYyMzFkYzZjMzFhZmE5ODVlNQ==";