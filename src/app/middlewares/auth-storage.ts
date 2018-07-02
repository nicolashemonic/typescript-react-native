import AuthStorage from "../services/auth-storage";
import { AuthAction } from "../actions/auth";

export const authStorageMiddleware = () => next => (action: AuthAction) => {
	switch (action.type) {
		case "LOG_IN_SUCCESS": {
			AuthStorage.setToken(action.token);
			break;
		}
		case "LOG_OUT_SUCCESS": {
			AuthStorage.removeToken();
			break;
		}
	}
	return next(action);
};
