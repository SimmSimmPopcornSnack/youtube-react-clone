import {fork, take, all, put, call} from "redux-saga/effects";
import * as watchAction from "../actions/watch";
import { REQUEST } from "../actions";
import { buildVideoDetailRequest } from "../api/youtube-api";

export function* fetchWatchDetails(videoId) {
    let requests = [
        buildVideoDetailRequest.bind(null, videoId),
    ];
    
    try {
        const requests = yield all(requests.map(fn => call(fn)));
        yield put(watchAction.details.success(requests));
    } catch(error){
        yield put(watchAction.details.failure(error));
    }
}

export function* watchWatchDetails(){
    while(true){
        const {videoId} = yield take(watchAction.WATCH_DETAILS[REQUEST]);
        yield fork(fetchWatchDetails, videoId);
    }
}
