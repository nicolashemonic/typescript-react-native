import { AuthAction } from "../actions/auth";
import { IAuthState } from "../models/auth";

const initialAuthState: IAuthState = {
	logging: false,
	token: "",
	error: ""
};

export default function authReducer(
	state = initialAuthState,
	action: AuthAction
) {
	switch (action.type) {
		case "LOG_IN_REQUEST":
			return {
				...state,
				logging: true,
				error: ""
			};
		case "LOG_IN_SUCCESS":
			return {
				...state,
				logging: false,
				token: action.token
			};
		case "LOG_IN_FAILURE":
			return {
				...state,
				logging: false,
				error: action.error
			};
		case "LOG_IN_FROM_STORAGE":
			return {
				...state,
				token: action.token
			};
		case "LOG_OUT_REQUEST":
			return {
				...state,
				logging: true,
				error: ""
			};
		case "LOG_OUT_SUCCESS":
			return {
				...state,
				logging: false,
				token: ""
			};
		case "LOG_OUT_FAILURE":
			return {
				...state,
				logging: false,
				error: action.error
			};
		case "SESSION_EXPIRED":
			return {
				...state,
				token: ""
			};
		default:
			return state;
	}
}
