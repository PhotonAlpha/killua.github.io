export const GET_INFO_REQUEST = "info/GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "info/GET_INFO_SUCCESS";
export const GET_INFO_FAIL = "info/GET_INFO_FAIL";

export const GET_RESOURCE_REQUEST = "resource/GET_INFO_REQUEST";
export const GET_RESOURCE_SUCCESS = "resource/GET_INFO_SUCCESS";
export const GET_RESOURCE_FAIL = "resource/GET_INFO_FAIL";

export function getResumeInfo() {
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`http://localhost:4200/api/resume.json`)
    }
    return result;
}

export function getResourceTrees() {
    const result = {
        types: [GET_RESOURCE_REQUEST, GET_RESOURCE_SUCCESS, GET_RESOURCE_FAIL],
        promise: client => client.get(`https://api.github.com/repos/photonalpha/blogs/git/trees/master?recursive=1`)
    }
    return result;
}

export function getBlogData() {
    const result = {
        types: [GET_RESOURCE_REQUEST, GET_RESOURCE_SUCCESS, GET_RESOURCE_FAIL],
        promise: client => client.get(`https://api.github.com/repos/PhotonAlpha/blogs/readme`)
    }
    return result;
}