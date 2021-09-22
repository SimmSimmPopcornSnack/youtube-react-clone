import React from "react";
import { shallow } from "enzyme";
import { SideBarItem } from "../SideBarItem";

const location = {
    pathname: "/feed/trending",
};

describe("SideBarItem", () => {
    test("renders empty SideBarItem", () => {
        const wrapper = shallow(
            <SideBarItem location={location}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders highlighted SideBarItem that navigates to /feed/trending", () => {
        const wrapper = shallow(
            <SideBarItem highlight icon="fire" label="Trending" location={location} path={"/feed/trending"}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders non-highlighted SideBarItem that navigates to /feed/trending", () => {
        const wrapper = shallow(
            <SideBarItem icon="fire" label="Trending" location={location}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test("renders highlighted SideBarItem with no navigaiton", () => {
        const wrapper = shallow(
            <SideBarItem highlight icon="fire" label="Trending" location={location}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});

