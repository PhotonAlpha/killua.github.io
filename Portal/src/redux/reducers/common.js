import {GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL } from 'actions/common';

const initialState = {
    isLoading: false,
    information: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('common reducer', state, action)
    switch (action.type) {
        case GET_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                information: {},
                errorMsg: ''
            }
        case GET_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                information: action.result.data,
                errorMsg: ''
            }
        case GET_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                information: {},
                errorMsg: '请求错误'
            }  
        default:
            return state
    }
}
