import { call, all, put, takeEvery, fork, take } from "redux-saga/effects";
import * as api from "../api/youtube-api";
import * as videoActions from "../actions/video";
import { REQUEST } from "../actions";
import { fetchEntity, ignoreErrors } from "./index";

export const fetchVideoCategories = fetchEntity.bind(null, api.buildVideoCategoriesRequest, videoActions.categories)

export function* fetchMostPopularVideos(amount, loadDescription, nextPageToken) {
    const request = api.buildMostPopularVideosRequest.bind(null, amount, loadDescription, nextPageToken);
    yield fetchEntity(request, videoActions.mostPopular);
}

export function* fetchMostPopularVideosByCategory(categories){
    const requests = categories.map(category => {
        const wrapper = ignoreErrors(api.buildVideoCategoriesRequest, 12, false, null, category);
        return call(wrapper);
    });
    try {
        const response = yield all(requests);
        yield put(videoActions.mostPopularByCategory.success(response, categories));
    } catch(error) {
        yield put(videoActions.mostPopularByCategory.failure(error));
    }
}

export function* watchMostPopularVideos() {
    while(true) {
        const {amount, loadDescription, nextPageToken} = yield take(videoActions.MOST_POPULAR[REQUEST]);
        yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
    }
}

export function* watchVideoCategories() {
    yield takeEvery(videoActions.VIDEO_CATEGORIES[REQUEST], fetchVideoCategories);
}

export function* watchMostPopularVideosByCategory() {
    while(true){
        const {categories} = yield take(videoActions.MOST_POPULAR_BY_CATEGORY[REQUEST]);
        yield fork(fetchMostPopularVideosByCategory, categories);
    }
}
