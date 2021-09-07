import {all, call, put, fork} from "redux-saga/effects";
import {watchMostPopularVideos} from "./video";
export default function* () {
    yield all([
        fork(watchMostPopularVideos),
    ]);
}

/*
* entity must have a success, request and failure methods
* request is a function that returns a promise when called
* */
export function* fetchEntity(request, entity, ...args) {
    try {
        const response = yield call(request);
        // we directly return the result obejct and throw away the headers and hte status text here
        // if status and headers are needed, then instead of returning response result, we have to return just response.
        yield put(entity.success(response.result, ...args));
    } catch (error) {
        yield put(entity.failure(error, ...args));
    }
}
