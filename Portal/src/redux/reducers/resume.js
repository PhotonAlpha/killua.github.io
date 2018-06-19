const GET_RESUME_REQUEST = "info/GET_RESUME_REQUEST";
const GET_RESUME_SUCCESS = "info/GET_RESUME_SUCCESS";
const GET_RESUME_FAIL = "info/GET_RESUME_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('resume reducer', state, action)
    switch (action.type) {
        case GET_RESUME_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_RESUME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_RESUME_FAIL:
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
        types: [GET_RESUME_REQUEST, GET_RESUME_SUCCESS, GET_RESUME_FAIL],
        promise: client => client.get(`http://localhost:4200/api/resume.json`)
    }
    return result;
}
