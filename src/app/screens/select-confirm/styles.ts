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
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: colors.border.primary,
		alignItems: "center",
		justifyContent: "center"
	},
	iconAction: {
		fontSize: 40,
		color: colors.alerting.attention,
		marginBottom: 20
	},
	titleText: {
		fontSize: 18
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
		fontSize: 18
	},
	sectionValueText: {
		fontSize: 14,
		marginTop: 10,
		color: colors.text.primary
	},
	buttonView: {
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 20,
		alignItems: "center"
	}
});
