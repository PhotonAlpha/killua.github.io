export const GET_INFO_REQUEST = "info/GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "info/GET_INFO_SUCCESS";
export const GET_INFO_FAIL = "info/GET_INFO_FAIL";

export function getResumeInfo() {
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`http://localhost:4200/api/resume.json`)
    }
    return result;
}