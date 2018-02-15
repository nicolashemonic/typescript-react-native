import { StyleSheet } from "react-native";

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
		color: "#222"
	},
	listItemAction: {
		paddingRight: 10
	},
	listItemCheckbox: {
		width: 20,
		height: 20,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#222",
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center"
	},
	listItemCheckboxSelected: {
		backgroundColor: "#028eca",
		borderColor: "#028eca"
	},
	listItemCheckboxIcon: {
		color: "#fff"
	}
});
