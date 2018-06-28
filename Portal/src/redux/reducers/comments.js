import { Base64 } from 'js-base64';
import { TEMP_TOKEN_AUTH } from 'components/Utils/Utils';

const GET_COMMENT_REQUEST = "comment/GET_INFO_REQUEST";
const GET_COMMENT_SUCCESS = "comment/GET_INFO_SUCCESS";
const GET_COMMENT_FAIL = "comment/GET_INFO_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    // console.log('comment reducer', state, action)
    switch (action.type) {
        case GET_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_COMMENT_FAIL:
            return {
                ...state,
                isLoading: false,
                message: {},
                errorMsg: '请求错误'
            }  
        default:
            return state
    }
}
export function getComments(issueNo) {
    if(issueNo && issueNo>0){
        const config= {
            headers: {
                'Authorization': `token ${TEMP_TOKEN_AUTH}`
            }
        }
        const result = {
            types: [GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL],
            promise: client => client.get(ISSUE_COMMENT.replace(':issueNo', issueNo), config)
        }
        return result;
    }
}
export function postComments(issueNo, comment, privKey = false) {
    if(issueNo && issueNo>0){
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
        const bodys = JSON.stringify({body: comment});
        const result = {
            types: [GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL],
            promise: client => client.post(ISSUE_COMMENT.replace(':issueNo', issueNo), bodys, config)
        }
        return result;
    }
}
const ISSUE_COMMENT = `https://api.github.com/repos/PhotonAlpha/blogs/issues/:issueNo/comments`