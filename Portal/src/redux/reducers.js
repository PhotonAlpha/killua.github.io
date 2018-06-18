import {combineReducers} from "redux";

import blogStore from './reducers/blogs';
import commentStore from './reducers/comments';

// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }

export default combineReducers({
    blogStore,
    commentStore
});