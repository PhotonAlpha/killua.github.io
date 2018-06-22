import { Base64 } from 'js-base64';
import { TEMP_TOKEN } from 'components/Utils/Utils';

const GET_ISSUE_REQUEST = "issue/GET_INFO_REQUEST";
const GET_ISSUE_SUCCESS = "issue/GET_INFO_SUCCESS";
const GET_ISSUE_FAIL = "issue/GET_INFO_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    // console.log('issue reducer', state, action)
    switch (action.type) {
        case GET_ISSUE_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_ISSUE_FAIL:
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
export function getBlogIssues(params) {
    console.log('getBlogIssues', params);
    const result = {
        types: [GET_ISSUE_REQUEST, GET_ISSUE_SUCCESS, GET_ISSUE_FAIL],
        promise: client => client.get(BOLG_ISSUES)
    }
    return result;
}
export function searchBlogIssues(params) {
    console.log('searchBlogIssues', params);
    const SEARCH_ISSUE = `https://api.github.com/search/issues?q=${params}+type:issue+in:title+state:open+repo:photonalpha/blogs&sort=created&order=desc`+`&`+TOKEN;
    const result = {
        types: [GET_ISSUE_REQUEST, GET_ISSUE_SUCCESS, GET_ISSUE_FAIL],
        promise: client => client.get(SEARCH_ISSUE)
    }
    return result;
}

const TOKEN = TEMP_TOKEN;
const BOLG_ISSUES = `https://api.github.com/repos/PhotonAlpha/blogs/issues?state=open&labels=rare&labels=BlogWorks`+`&`+TOKEN;