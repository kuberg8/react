import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './statusWithClass.js'

describe("Button component", () => {
  test("status from props should be inthe state", () => {
    const component = create(<ProfileStatus status="hey" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hey");
  });
});