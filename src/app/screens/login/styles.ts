import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	login: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.background.primary
	},
	loginFormText: {
		marginVertical: 20
	},
	loginFormPassword: {
		marginTop: 20
	},
	loginFormButton: {
		flex: 1,
		alignItems: "flex-end",
		marginTop: 40
	}
});
