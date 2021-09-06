import React from "react";
import { shallow } from "enzyme";
import { Comments } from "../Comments";
import { shallowEqual } from "@babel/types";

describe("Comments", () => {
    test("renders without props", () => {
        const wrapper = shallow(<Comments/>);
        expect(wrapper).toMatchSnapshot();
    });
    test("renders with amountComments", () => {
        const wrapper = shallow(
            <Comments amountComments={112499}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
