import React from "react";
import { shallow } from "enzyme";
import { CommentsHeader } from "../CommentsHeader";

describe("CommentsHeader", () => {
    test("renders without props", () => {
        const wrapper = shallow(<CommentsHeader/>);
        expect(wrapper).toMatchSnapshot();
    });
    test("renders with amountComments", () => {
        const wrapper = shallow(
            <CommentsHeader amountComments={112499}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
