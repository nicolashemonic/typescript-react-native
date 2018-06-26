import React from "react";
import { BackHandler } from "react-native";
import AppNavigator from "./app-navigator";
import { NavigationActions } from "react-navigation";

export default class App extends React.Component<any, any> {
	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}
	onBackPress = () => {
		const { dispatch, navigation } = this.props;
		if (navigation.index === 0) {
			return false;
		}
		dispatch(NavigationActions.back());
		return true;
	};

	render() {
		return <AppNavigator />;
	}
}