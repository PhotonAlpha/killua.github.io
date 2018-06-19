import {combineReducers} from "redux";

import blogStore from './reducers/blogs';
import issueStore from './reducers/issues';
import commentStore from './reducers/comments';
import resumeStore from './reducers/resume';

// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }

export default combineReducers({
    blogStore,
    issueStore,
    commentStore,
    resumeStore
});