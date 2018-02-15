import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	selectDates: {
		flex: 1,
		backgroundColor: colors.background.primary
	},
	selectDatesActionFooter: {
		position: "absolute",
		width: "100%",
		bottom: 0
	}
});
