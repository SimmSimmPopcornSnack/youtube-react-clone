import React from "react";
import { shallow } from "enzyme";
import "../VideoPreview";
import { VideoPreview } from "../VideoPreview";

describe("Video Preview", () => {
    test("renders vertically", () => {
        const wrapper = shallow(<VideoPreview/>);
        expect(wrapper).toMatchSnapshot();
    });
    test("renders horizontally", () => {
        const wrapper = shallow(<VideoPreview horizontally={true}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
