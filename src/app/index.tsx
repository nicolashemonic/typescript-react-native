import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import App from "./app";

const store = createStore();

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
