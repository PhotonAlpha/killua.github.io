import { Base64 } from 'js-base64';

const GET_INFO_REQUEST = "blog/GET_INFO_REQUEST";
const GET_INFO_SUCCESS = "blog/GET_INFO_SUCCESS";
const GET_INFO_FAIL = "blog/GET_INFO_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('blog reducer', state, action)
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

export function getRepositoryTree(params) {
    console.log('getRepositoryTree', params);
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(BOLG_REPOSITORY)
    }
    return result;
}
export function getCatalogTree(params) {
    console.log('getCatalogTree', params);
    if(params) {
        console.log('CONTENTS_REPOSITORY', CONTENTS_REPOSITORY.replace(':path', params))
        const result = {
            types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
            promise: client => client.get(CONTENTS_REPOSITORY.replace(':path', params))
        }
        return result;
    }
    return 'params:'+params+' illegal!'
}

export function getBlogData(git_hash) {
    console.log('getBlogData', git_hash, BLOG_BLOBS.replace(':hash', git_hash));
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(BLOG_BLOBS.replace(':hash', git_hash))
    }
    return result;
}
export function getAboutme() {
    console.log('getAboutme');
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(ABOUT_REPOSITORY)
        // promise: client => client.get(`http://localhost:4200/api/blogContent.json`)
    }
    return result;
}

const t = 'NmQ4ZGEyMDQ4ZmY3ODAyZjc1ZDViZGRmMTcwNjBjNWQ1NDU5NWRkZg==';
const TOKEN = `access_token=`+Base64.decode(t);
const BOLG_REPOSITORY = `https://api.github.com/repos/PhotonAlpha/blogs/git/trees/master?recursive=1`+`&`+TOKEN;
const BLOG_BLOBS = `https://api.github.com/repos/PhotonAlpha/blogs/git/blobs/:hash`+`?`+TOKEN;

const CONTENTS_REPOSITORY = `https://api.github.com/repos/photonalpha/blogs/contents/:path`+`?`+TOKEN;
const ABOUT_REPOSITORY = `https://api.github.com/repos/PhotonAlpha/blogs/readme`+`?`+TOKEN;
