import { Base64 } from 'js-base64';
import { TEMP_TOKEN } from 'components/Utils/Utils';

const GET_INFO_REQUEST = "blog/GET_INFO_REQUEST";
const GET_INFO_SUCCESS = "blog/GET_INFO_SUCCESS";
const GET_INFO_FAIL = "blog/GET_INFO_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
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
                message: action.error.response.data,
                errorMsg: action.error.response.status+' Bad Request!'
            }  
        default:
            return state
    }
}

export function getRepositoryTree() {
    console.log('getRepositoryTree');
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(BOLG_REPOSITORY)
    }
    return result;
}
export function getCatalogTree(params) {
    console.log('getCatalogTree', CONTENTS_REPOSITORY.replace(':path', params))
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(CONTENTS_REPOSITORY.replace(':path', params))
    }
    return result;
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

const TOKEN = TEMP_TOKEN;
const BOLG_REPOSITORY = `https://api.github.com/repos/PhotonAlpha/blogs/git/trees/master?recursive=1`+`&`+TOKEN;
const BLOG_BLOBS = `https://api.github.com/repos/PhotonAlpha/blogs/git/blobs/:hash`+`?`+TOKEN;

const CONTENTS_REPOSITORY = `https://api.github.com/repos/photonalpha/blogs/contents/:path`+`?`+TOKEN;
const ABOUT_REPOSITORY = `https://api.github.com/repos/PhotonAlpha/blogs/readme`+`?`+TOKEN;
