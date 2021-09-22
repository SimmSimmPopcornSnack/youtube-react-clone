import React from "react";
import { shallow } from "enzyme";
import { HomeContent } from "../HomeContent";

describe("HomeContent", () => {
    test("renders", () => {
        const wrapper = shallow(<HomeContent bottomReachedCallback={jest.fn()} showLoader={true} videosByCategory={[]} mostPopularVideos={[]}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
