import React from "react";
import { shallow } from "enzyme";
import { Subscription } from "../Subscription";

describe("Subscription", () => {
    test("renders empty Subscription", () => {
        const wrapper = shallow(
            <Subscription/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders broadcasting Subscription", () => {
        const wrapper = shallow(
            <Subscription broadcasting label="Producitoncoder"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders non-broadcasting Subscription with new videos", () => {
        const wrapper = shallow(
            <Subscription amountNewVideos={4} label="Productioncoder"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
