import { StyleSheet } from "react-native";

export default StyleSheet.create({
	actionView: {
		flex: 1,
		backgroundColor: "#fff"
	},
	openActionTouchable: {},
	openActionInner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#82b00a"
	},
	closeActionTouchable: {},
	closeActionInner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#d0534e"
	},
	iconAction: {
		fontSize: 50,
		color: "#fff",
		marginBottom: 20
	},
	openAction: {
		fontSize: 20,
		color: "#fff"
	},
	closeAction: {
		fontSize: 20,
		color: "#fff"
	}
});
