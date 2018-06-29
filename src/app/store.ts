import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers/combine";
import { exceptionLoggerMiddleware } from "./middlewares/exception-logger";
import { authStorageMiddleware } from "./middlewares/auth-storage";
import { IState } from "./models";
import { AppAction } from "./actions";

const loggerMiddleware = createLogger({
	level: "info"
});

const composeEnhancers =
	window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export default () =>
	createStore<IState, AppAction, any, any>(
		reducer,
		composeEnhancers(
			applyMiddleware(
				exceptionLoggerMiddleware,
				authStorageMiddleware,
				thunkMiddleware,
				loggerMiddleware
			)
		)
	);
