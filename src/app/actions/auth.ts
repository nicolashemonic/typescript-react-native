import NavigationService from "../services/navigation";
import { AsyncActionCreator, SyncActionCreator, Dispatch } from "../types";

const api = (dispatch: Dispatch) =>
	new Promise((resolve, reject) =>
		setTimeout(() => {
			const httpResponse200 = () => resolve();
			const httpResponse401 = () =>
				dispatch(sessionExpired()) && reject("Session Expired");
			return httpResponse200();
			//return httpResponse401();
		}, 200)
	);

export type AuthAction =
	| ReturnType<LogInRequest>
	| ReturnType<LogInSuccess>
	| ReturnType<LogInFailure>
	| ReturnType<LogInFromStorage>
	| ReturnType<LogOutRequest>
	| ReturnType<LogOutSuccess>
	| ReturnType<LogOutFailure>
	| ReturnType<SessionExpired>;

// Log In

export type LogInRequest = () => {
	type: "LOG_IN_REQUEST";
};

export type LogInSuccess = (
	token: string
) => {
	type: "LOG_IN_SUCCESS";
	token: string;
};

export type LogInFailure = (
	error: string
) => {
	type: "LOG_IN_FAILURE";
	error: string;
};

export const logInRequest: LogInRequest = () => ({
	type: "LOG_IN_REQUEST"
});

export const logInSuccess: LogInSuccess = token => ({
	type: "LOG_IN_SUCCESS",
	token: token
});

export const logInFailure: LogInFailure = error => ({
	type: "LOG_IN_FAILURE",
	error: error
});

export const logIn: AsyncActionCreator = (email: string, password: string) => {
	return async (dispatch, getState) => {
		dispatch(logInRequest());
		try {
			await api(dispatch);
			dispatch(logInSuccess("abc"));
			NavigationService.navigate("App");
		} catch (e) {
			dispatch(logInFailure(e.message || e));
		}
	};
};

// Log In From Storage

export type LogInFromStorage = (
	token: string
) => {
	type: "LOG_IN_FROM_STORAGE";
	token: string;
};

export const logInFromStorage: LogInFromStorage = token => ({
	type: "LOG_IN_FROM_STORAGE",
	token: token
});

// Log Out

export type LogOutRequest = () => {
	type: "LOG_OUT_REQUEST";
};

export type LogOutSuccess = () => {
	type: "LOG_OUT_SUCCESS";
};

export type LogOutFailure = (
	error: string
) => {
	type: "LOG_OUT_FAILURE";
	error: string;
};

export const logOutRequest: LogOutRequest = () => ({
	type: "LOG_OUT_REQUEST"
});

export const logOutSuccess: LogOutSuccess = () => ({
	type: "LOG_OUT_SUCCESS"
});

export const logOutFailure: LogOutFailure = error => ({
	type: "LOG_OUT_FAILURE",
	error: error
});

export const logOut: AsyncActionCreator = () => {
	return async (dispatch, getState) => {
		dispatch(logOutRequest());
		try {
			await api(dispatch);
			dispatch(logOutSuccess());
			NavigationService.navigate("Auth");
		} catch (e) {
			dispatch(logOutFailure(e.message || e));
		}
	};
};

// Session Expired

export type SessionExpired = () => {
	type: "SESSION_EXPIRED";
};

export const _sessionExpired: SessionExpired = () => ({
	type: "SESSION_EXPIRED"
});

export const sessionExpired: SyncActionCreator = () => {
	return (dispatch, getState) => {
		dispatch(_sessionExpired());
		NavigationService.navigate("Auth");
	};
};
