import apiReducer from "./api";
import videosReducer from "./videos";
import { combineReducers } from "redux";

export default combineReducers({
    api: apiReducer,
    videos: videosReducer,
});

// export default function(state={}, action) {
//     switch(action.type) {
//         default:
//             return state;
//     }
// } 
