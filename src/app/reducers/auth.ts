import { AuthAction } from "../actions/auth";

export interface ILogInState {}

const initialLogInState: ILogInState = {};

export default function modifyRates(
	state = initialLogInState,
	action: AuthAction
) {
	switch (action.type) {
		case "LOG_IN":
			return {
				...state
			};
		default:
			return state;
	}
}
