import { AsyncStorage } from "react-native";

export default class AuthStorage {
	static readonly userToken = "user-token";

	static async getToken() {
		return await AsyncStorage.getItem(AuthStorage.userToken);
	}

	static async setToken(token: string) {
		return await AsyncStorage.setItem(AuthStorage.userToken, token);
	}

	static async removeToken() {
		return await AsyncStorage.removeItem(AuthStorage.userToken);
	}
}
