import { StyleSheet } from "react-native";

export default StyleSheet.create({
	splash: {
		flex: 1,
		backgroundColor: "#056693"
	},
	splashLogo: {
		flex: 1,
		width: undefined,
		height: undefined,
		resizeMode: "contain",
		marginLeft: "20%",
		marginRight: "20%"
	},
	splashLogin: {
		flex: 1,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center"
	},
	splashLoginLink: {},
	splashLoginText: {
		color: "white",
		padding: 8,
		fontSize: 20
	}
});
