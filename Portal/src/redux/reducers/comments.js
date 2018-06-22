import { Base64 } from 'js-base64';

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
    console.log('getBlogIssues', issueNo);
    if(issueNo && issueNo>0){
        const result = {
            types: [GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL],
            promise: client => client.get(ISSUE_COMMENT.replace(':issueNo', issueNo), config)
        }
        return result;
    }
}
export function postComments(issueNo, comment) {
    console.log('postComments', comment);
    if(issueNo && issueNo>0){
        const bodys = JSON.stringify({body: comment});
        const result = {
            types: [GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL],
            promise: client => client.post(ISSUE_COMMENT.replace(':issueNo', issueNo), bodys, config)
        }
        return result;
    }
}
const config= {
    headers: {
        'Authorization': `token `+localStorage.getItem('GT_ACCESS_TOKEN')
    }
}
const ISSUE_COMMENT = `https://api.github.com/repos/PhotonAlpha/blogs/issues/:issueNo/comments`