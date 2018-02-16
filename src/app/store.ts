// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
// import reducer from "./reducers/combine";

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

// export default function configureStore() {
// 	return createStore<any>(
// 		reducer,
// 		applyMiddleware(
// 			exceptionLoggerMiddleware,
// 			thunkMiddleware,
// 			loggerMiddleware
// 		)
// 	);
// }
