import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import App from "./app";

export default class Root extends React.Component {
	render() {
		const store = createStore();
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
