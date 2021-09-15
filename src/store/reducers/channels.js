import { VIDEO_DETAILS, WATCH_DETAILS } from "../actions/watch";
import { SUCCESS } from "../actions";
import { CHANNEL_LIST_RESPONSE } from "../api/youtube-api-response-types";

const initialState = {
    byId: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case WATCH_DETAILS[SUCCESS]:
            return reduceWatchDetails(action.response, state);
        default:
            return state;
    }
}

function reduceWatchDetails(responses, prevState) {
    const channelResponse = responses.find(r => r.result.kind === CHANNEL_LIST_RESPONSE);
    let channels = {};
    if (channelResponse && channelResponse.result.items) {
        // we know that there will only be one item
        // becase we ask for a channel with a specific id
        const channel = channelResponse.items[0];
        channels[channel.id] = channel;
    }
    return {
        ...prevState,
        byId: {
            ...prevState.byId,
            ...channels
        }
    };
}
