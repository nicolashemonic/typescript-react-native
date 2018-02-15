import { StyleSheet } from "react-native";

export default StyleSheet.create({
	actionFooter: {
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#e2e2e2"
	},
	actionFooterInner: {
		flex: 1,
		flexDirection: "row"
	},
	actionFooterTextWrapper: {
		flex: 3,
		paddingLeft: 20,
		justifyContent: "center"
	},
	actionFooterText: {
		color: "#222",
		fontSize: 16
	},
	actionFooterButtonWrapper: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: "flex-end"
	}
});
