import React from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import createStore from "./store";
import createApp from "./app";

const store = createStore();
const App = createApp();

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

AppRegistry.registerComponent("ReactNativeCli", () => Root);
