// import React from "react";
// import { connect } from "react-redux";
// import { StackNavigator, addNavigationHelpers } from "react-navigation";
// import {
// 	createReduxBoundAddListener,
// 	createReactNavigationReduxMiddleware
// } from "react-navigation-redux-helpers";
// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
// import reducer from "./reducers/combine";
// import SplashScreen from "./screens/splash";
// import LoginScreen from "./screens/login";
// import PlanningScreen from "./screens/planning";
// import SelectActionScreen from "./screens/select-action";
// import SelectRatesScreen from "./screens/select-rates";
// import SelectDatesScreen from "./screens/select-dates";
// import SelectConfirmScreen from "./screens/select-confirm";

// const middleware = createReactNavigationReduxMiddleware(
// 	"root",
// 	state => state.nav
// );

// const addListener = createReduxBoundAddListener("root");

// const loggerMiddleware = createLogger({
// 	level: "info"
// });

// const exceptionLoggerMiddleware = () => next => action => {
// 	try {
// 		return next(action);
// 	} catch (exception) {
// 		// report error here
// 		throw exception;
// 	}
// };

// export const store = createStore<any>(
// 	reducer,
// 	applyMiddleware(
// 		middleware,
// 		exceptionLoggerMiddleware,
// 		thunkMiddleware,
// 		loggerMiddleware
// 	)
// );

// export const AppNavigator = StackNavigator(
// 	{
// 		Splash: { screen: SplashScreen },
// 		Login: { screen: LoginScreen },
// 		Planning: { screen: PlanningScreen },
// 		SelectAction: { screen: SelectActionScreen },
// 		SelectRates: { screen: SelectRatesScreen },
// 		SelectDates: { screen: SelectDatesScreen },
// 		SelectConfirm: { screen: SelectConfirmScreen }
// 	},
// 	{ initialRouteName: "Splash" }
// );

// const AppWithNavigationState = ({ dispatch, nav }) => (
// 	<AppNavigator
// 		navigation={addNavigationHelpers({
// 			dispatch,
// 			state: nav,
// 			addListener
// 		} as any)}
// 	/>
// );

// const mapStateToProps = state => ({
// 	nav: state.nav
// });

// export const AppWithNavigation = connect(mapStateToProps)(
// 	AppWithNavigationState
// );
