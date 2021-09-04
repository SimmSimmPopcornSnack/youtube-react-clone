// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import React from "react";
import Enzyme from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer, CreateSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// React 17 Enzyme adapter
Enzyme.configure({adapter: new Adapter()});
