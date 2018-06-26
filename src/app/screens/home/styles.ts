import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	home: {
		flex: 1,
		backgroundColor: colors.background.primary
	},
	homeButtons: {
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center"
	}
});
