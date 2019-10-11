import React from "react";
import Forms from "lectures/forms/Forms";
import TestRenderer from "react-test-renderer";
import { create, act } from "react-test-renderer";

describe("Check Forms in Lectures", () => {
  test("check state value", () => {
    let tree = create(<Forms />);
    console.log("treetreetreetree", tree);
    let instance = tree.getInstance();
    console.log("tree.props", tree.toJSON().props);
    // expect(instance.state.firstname).toBe("hello");
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
