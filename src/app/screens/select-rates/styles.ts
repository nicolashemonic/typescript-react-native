import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	selectRates: {
		flex: 1,
		backgroundColor: colors.background.primary,
		paddingBottom: 55
	},
	selectRatesActionFooter: {
		position: "absolute",
		width: "100%",
		bottom: 0
	}
});
