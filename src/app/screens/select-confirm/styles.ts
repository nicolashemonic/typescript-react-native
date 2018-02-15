import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	contentContainer: {
		flexGrow: 1
	},
	confirmView: {
		flex: 1,
		backgroundColor: "#fff"
	},
	titleView: {
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 40,
		backgroundColor: colors.alerting.attention,
		alignItems: "center",
		justifyContent: "center"
	},
	iconAction: {
		fontSize: 40,
		color: colors.text.bright,
		marginBottom: 10
	},
	titleText: {
		fontSize: 20,
		color: colors.text.bright
	},
	sectionsView: {
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	sectionView: {
		marginBottom: 40
	},
	sectionTitleText: {
		fontSize: 18,
		color: colors.text.primary
	},
	sectionValueText: {
		fontSize: 14,
		color: colors.text.primary,
		marginTop: 10
	},
	buttonView: {
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 20,
		alignItems: "center",
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: colors.border.primary
	}
});
