import apiReducer from "./api";
import videosReducer from "./videos";
import { combineReducers } from "redux";
import channelsReducer from "./channels";
import commentsReducer from "./comment";

export default combineReducers({
    api: apiReducer,
    videos: videosReducer,
    channels: channelsReducer,
    comments: commentsReducer,    
});

// export default function(state={}, action) {
//     switch(action.type) {
//         default:
//             return state;
//     }
// } 
