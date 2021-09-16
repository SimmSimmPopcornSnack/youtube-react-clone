import {fork, take, all, put, call} from "redux-saga/effects";
import * as watchAction from "../actions/watch";
import {
    buildChannelRequest,
    buildCommentThreadRequest,
    buildRelatedVideosRequest, 
    buildVideoDetailRequest
} from "../api/youtube-api";
import { REQUEST } from "../actions";
import { SEARCH_LIST_RESPONSE, VIDEO_LIST_RESPONSE } from "../api/youtube-api-response-types";

export function* fetchWatchDetails(videoId, channelId) {
    let requests = [
        buildVideoDetailRequest.bind(null, videoId),
        buildRelatedVideosRequest(null, videoId),
        buildCommentThreadRequest(null, videoId)
    ];

    if(!channelId) {
        requests.push(buildChannelRequest.bind(null, channelId));
    }
    
    try {
        const responses = yield all(requests.map(fn => call(fn)));
        yield put(watchAction.details.success(requests, videoId));
        yield call(fetchVideoDetails, responses, channelId === null);
    } catch (error) {
        yield put(watchAction.details.failure(error));
    }
}

function* fetchVideoDetails(responses, shouldFetchChannelInfo) {
    const searchListResponse = responses.find(response => response.result.kind === SEARCH_LIST_RESPONSE);
    const relatedVideoIds = searchListResponse.result.items.map(relatedVideo => relatedVideo.id.videoId);

    const requests = relatedVideoIds.map(relatedVideoId => {
        return buildVideoDetailRequest.bind(null, relatedVideoId);
    });

    if(shouldFetchChannelInfo) {
        // we have to extract the video's channel id from the video details response
        // so we can load additional channel information.
        // this is only needee, when a user directly accesses .../watch?v=1234
        // because then we only know the video id
        const videoDetailResponse = responses.find(response => response.result.kind === VIDEO_LIST_RESPONSE);
        const videos = videoDetailResponse.reuslt.items;
        if(videos && videos.length) {
            requests.push(buildChannelRequest.bind(null, videos[0].snippet.channel));
        }
    }

    try {
        const responses = yield all(requests.map(fn => call(fn)));
        yield put(watchAction.videoDetails.success(responses));
    } catch (error) {
        yield put(watchAction.videoDetails.failure(error));
    }
}

export function* watchWatchDetails(){
    while(true){
        const {videoId} = yield take(watchAction.WATCH_DETAILS[REQUEST]);
        yield fork(fetchWatchDetails, videoId);
    }
}

