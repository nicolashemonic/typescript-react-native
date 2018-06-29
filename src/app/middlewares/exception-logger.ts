export const exceptionLoggerMiddleware = () => next => action => {
	try {
		return next(action);
	} catch (exception) {
		// report error here
		throw exception;
	}
};
