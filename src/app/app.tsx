import React from "react";
import { connect } from "react-redux";
import { BackHandler } from "react-native";
import AppNavigator from "./app-navigator";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";

const addListener = createReduxBoundAddListener("root");

class App extends React.Component<any, any> {
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
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.navigation,
					addListener
				} as any)}
			/>
		);
	}
}

const mapStateToProps = state => ({
	navigation: state.navigation
});

export default () => connect(mapStateToProps)(App);
