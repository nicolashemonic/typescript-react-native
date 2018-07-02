import "react-native";
import React from "react";
import App from "../app";

// Note: test renderer must be required after react-native.
import { create } from "react-test-renderer";

it("renders correctly", () => {
	const tree = create(<App />);
	expect(tree).toBeDefined();
});
