import { createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS } from ".";
import { SEARCH_LIST_RESPONSE } from "../api/youtube-api-response-types";

export const SEARCH_FOR_VIDEOS = createRequestTypes("SEARCH_FOR_VIDEOS");
export const forVideos = {
    request: (searchQuery, nextPageToken, amount) => createAction(SEARCH_FOR_VIDEOS[REQUEST], {searchQuery, nextPageToken, amount}),
    success: (response, searchQuery) => createAction(SEARCH_FOR_VIDEOS[SUCCESS], {response, searchQuery}),
    failure: (response, searchQuery) => createAction(SEARCH_FOR_VIDEOS[FAILURE], {response, searchQuery}),
};
