const GET_INFO_REQUEST = "info/GET_INFO_REQUEST";
const GET_INFO_SUCCESS = "info/GET_INFO_SUCCESS";
const GET_INFO_FAIL = "info/GET_INFO_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('common reducer', state, action)
    switch (action.type) {
        case GET_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_INFO_FAIL:
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
export function getResumeInfo() {
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`http://localhost:4200/api/resume.json`)
    }
    return result;
}

export function getBlogData(params) {
    console.log('getBlogData', params);
    if(params){
        const result = {
            types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
            promise: client => client.get(`http://localhost:4200/api/blogContent.json`)
        }
        return result;
    }
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`https://api.github.com/repos/PhotonAlpha/blogs/readme`)
    }
    return result;
}
export function getBlogIssues(params) {
    console.log('getBlogIssues', params);
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(BOLG_ISSUES)
    }
    return result;
}

export function getRepositoryTree(params) {
    console.log('getBlogData', params);
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(BOLG_REPOSITORY)
    }
    return result;
}
export function getBlogData(git_url) {
    console.log('getBlogData', git_url);
    if(git_url){
        const result = {
            types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
            promise: client => client.get(git_url+`&`+TOKEN)
        }
        return result;
    }
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(ABOUT_REPOSITORY)
    }
    return result;
}
const TOKEN = `access_token=4bda96067eea754344532f7003a8e6fe6e422ec4`;
const BOLG_ISSUES = `https://api.github.com/repos/PhotonAlpha/blogs/issues?state=open`+`&`+TOKEN;
const BOLG_REPOSITORY = `https://api.github.com/search/code?q=extension:md+in:path+language:md+repo:photonalpha/blogs`+`&`+TOKEN;
const ABOUT_REPOSITORY = `https://api.github.com/repos/PhotonAlpha/blogs/readme`+`&`+TOKEN;
