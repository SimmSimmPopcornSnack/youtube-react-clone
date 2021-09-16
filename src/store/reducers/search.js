import { SEARCH_FOR_VIDEOS } from "../actions/search";
import { SUCCESS } from "../actions";

export default function(state = {}, action) {
    switch(action.type) {
        case SEARCH_FOR_VIDEOS[SUCCESS]:
            return reduceSearchForVideos(action.response, action.searchQuery);
        default:
            return state;
    }
};

function reduceSearchForVideos(response, searchQuery, prevState) {
    let searchResult = response.items.map(item => ({...item, id: item.id.videoId}));
    if(prevState.query === searchQuery) { // for infinity scroll
        const prevResult = prevState.result || [];
        searchResult = prevResult.concat(searchResult);
    }
    return {
        totalResults: response.pageInfo.totalResults,
        nextPageToken: response.nextPageToken,
        query: searchQuery,
        results: searchResult
    };
}

export const getSearchResults = (state) => state.search.searchResult;
export const getSearchNextPageToken = (state) => state.search.nextPageToken;
