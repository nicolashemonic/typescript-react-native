import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers/combine";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

const loggerMiddleware = createLogger({
	level: "info"
});

const exceptionLoggerMiddleware = () => next => action => {
	try {
		return next(action);
	} catch (exception) {
		// report error here
		throw exception;
	}
};

const navigationMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.navigation
);

const composeEnhancers =
	window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export default () =>
	createStore(
		reducer,
		composeEnhancers(
			applyMiddleware(
				navigationMiddleware,
				exceptionLoggerMiddleware,
				thunkMiddleware,
				loggerMiddleware
			)
		)
	);
