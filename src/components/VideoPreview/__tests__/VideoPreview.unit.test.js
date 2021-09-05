import React from "react";
import { shallow } from "enzyme";
import "../VideoPreview";
import { VideoPreview } from "../VideoPreview";

describe("Video Preview", () => {
    test("renders", () => {
        const wrapper = shallow(<VideoPreview/>);
        expect(wrapper).toMatchSnapshot();
    });
});
