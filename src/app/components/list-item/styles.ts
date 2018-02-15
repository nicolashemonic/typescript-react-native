import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	listItem: {
		borderBottomColor: "#e2e2e2",
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	listItemInner: {
		flex: 1,
		flexDirection: "row",
		padding: 20
	},
	listItemText: {
		color: colors.text.primary
	},
	listItemAction: {
		paddingRight: 10
	},
	listItemCheckbox: {
		width: 20,
		height: 20,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: colors.border.primary,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center"
	},
	listItemCheckboxSelected: {
		backgroundColor: colors.alerting.information,
		borderColor: colors.alerting.information
	},
	listItemCheckboxIcon: {
		color: colors.text.bright
	}
});
