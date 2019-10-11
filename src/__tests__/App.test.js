import React from "react";
import App from "../App";
import { create, act } from "react-test-renderer";

describe("My first snapshot test", () => {
  test("testing app button", () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
