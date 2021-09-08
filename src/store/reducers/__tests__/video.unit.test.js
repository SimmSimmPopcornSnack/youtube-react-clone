import videoReducer from "../videos";
import { MOST_POPULAR } from "../../actions/video";
import { SUCCESS } from "../../actions";
import mostPopularResponse from "./responses/MOST_POPULAR_VIDEOS";
import mostPopularState from "./states/MOST_POPULAR_VIDEOS";

const initialState = {
    byId: {},
    mostPopular: {},
};

describe("video reducer", () => {
    test("test undefined action type and initial state with videos reducer", () => {
        const expectedEndState = {...initialState};
        expect(videoReducer(initialState, {type: "some-unused-type"})).toEqual(expectedEndState);
    });

    test("test MOST_POPULAR_SUCCESS action in video reducer", () => {
        const startState = {...initialState};
        const action = {
            type: MOST_POPULAR[SUCCESS],
            response: mostPopularResponse,
        };
        const expectedEndState = {
            ...startState,
            ...mostPopularState,
        };
        expect(videoReducer(startState, action)).toEqual(expectedEndState);
    });
});
