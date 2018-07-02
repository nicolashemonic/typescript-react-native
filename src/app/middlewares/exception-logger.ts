import { AppAction } from "../actions";
import { Middleware } from "redux";

export const exceptionLoggerMiddleware: Middleware = () => next => (
	action: AppAction
) => {
	try {
		return next(action);
	} catch (exception) {
		// report error here
		throw exception;
	}
};
