import { StyleSheet } from "react-native";

export default StyleSheet.create({
	datesView: {
		flex: 1,
		backgroundColor: "#fff"
	},
	datesFooter: {
		position: "absolute",
		width: "100%",
		bottom: 0,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#e2e2e2"
	},
	datesFooterInner: {
		flex: 1,
		flexDirection: "row"
	},
	datesTextView: {
		flex: 3,
		paddingLeft: 20,
		justifyContent: "center"
	},
	datesText: {
		color: "#222",
		fontSize: 16
	},
	datesButton: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: "flex-end"
	}
});
