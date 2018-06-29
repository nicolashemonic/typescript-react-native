import { AsyncStorage } from "react-native";
import { AuthAction } from "../actions/auth";

export const authStorageMiddleware = () => next => (action: AuthAction) => {
	switch (action.type) {
		case "LOG_IN_SUCCESS": {
			AsyncStorage.setItem("userToken", action.token);
			break;
		}
		case "LOG_OUT_SUCCESS": {
			AsyncStorage.removeItem("userToken");
			break;
		}
	}
	return next(action);
};
