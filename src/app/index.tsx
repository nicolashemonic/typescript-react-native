// import React from "react";
// import { AppRegistry } from "react-native";
// import { Provider } from "react-redux";
// //import configureStore from "./store";

// import { store, AppWithNavigation } from "./app-navigator";

// //const store = configureStore();

// class Root extends React.Component {
// 	render() {
// 		return (
// 			<Provider store={store}>
// 				<AppWithNavigation />
// 			</Provider>
// 		);
// 	}
// }

import {
	StackNavigator,
	addNavigationHelpers,
	NavigationActions
} from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { Provider, connect } from "react-redux";
import React from "react";
import { AppRegistry, BackHandler } from "react-native";
import SplashScreen from "./screens/splash";
import LoginScreen from "./screens/login";
import PlanningScreen from "./screens/planning";
import SelectActionScreen from "./screens/select-action";
import SelectRatesScreen from "./screens/select-rates";
import SelectDatesScreen from "./screens/select-dates";
import SelectConfirmScreen from "./screens/select-confirm";

const AppNavigator = StackNavigator(
	{
		Splash: { screen: SplashScreen },
		Login: { screen: LoginScreen },
		Planning: { screen: PlanningScreen },
		SelectAction: { screen: SelectActionScreen },
		SelectRates: { screen: SelectRatesScreen },
		SelectDates: { screen: SelectDatesScreen },
		SelectConfirm: { screen: SelectConfirmScreen }
	},
	{ initialRouteName: "Splash" }
);

const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams("Splash"),
	undefined
);

const navReducer = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

const appReducer = combineReducers({
	nav: navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component<any, any> {
	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}
	onBackPress = () => {
		const { dispatch, nav } = this.props;
		if (nav.index === 0) {
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
					state: this.props.nav,
					addListener
				} as any)}
			/>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware));

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

AppRegistry.registerComponent("ReactNativeCli", () => Root);
