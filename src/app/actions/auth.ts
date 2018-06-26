export type AuthAction = LogIn;

type LogIn = {
	type: "LOG_IN";
};

export function logIn(): LogIn {
	return {
		type: "LOG_IN",
	};
}
