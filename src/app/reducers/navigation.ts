import AppNavigator from "../app-navigator";

const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams("Splash"),
	undefined
);

const navigation = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default navigation;
