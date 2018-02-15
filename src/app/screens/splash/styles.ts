import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	splash: {
		flex: 1,
		backgroundColor: colors.brand.primary
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
		color: colors.text.bright,
		padding: 8,
		fontSize: 20
	}
});
