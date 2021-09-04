import React from "react";
import { shallow } from "enzyme";
import { SideBarItem } from "../SideBarItem";

describe("SideBarItem", () => {
    test("renders empty SideBarItem", () => {
        const wrapper = shallow(
            <SideBarItem/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders highlighted SideBarItem that navigates to /feed/trending", () => {
        const wrapper = shallow(
            <SideBarItem highlight icon="fire" label="Trending"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders non-highlighted SideBarItem that navigates to /feed/trending", () => {
        const wrapper = shallow(
            <SideBarItem icon="fire" label="Trending"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders highlighted SideBarItem with no navigaiton", () => {
        const wrapper = shallow(
            <SideBarItem highlight icon="fire" label="Trending"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});

