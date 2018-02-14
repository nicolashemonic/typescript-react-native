import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
	loginView: {
		flex: 1,
		backgroundColor: "#fff"
	},
	formView: {
		flex: 1,
		padding: 20
	},
	formText: {
		marginVertical: 20,
		fontSize: 16,
		color: "#222"
	},
	password: {
		marginTop: 20
	},
	buttonView: {
		flex: 1,
		alignItems: "flex-start",
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingTop: 40
	},
	button: {
		paddingLeft: Platform.select({
			ios: 0
		})
	}
});
