import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers/combine";

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

const composeEnhancers =
	window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export default () =>
	createStore(
		reducer,
		composeEnhancers(
			applyMiddleware(
				exceptionLoggerMiddleware,
				thunkMiddleware,
				loggerMiddleware
			)
		)
	);
