import { StyleSheet } from "react-native";

export default StyleSheet.create({
	button: {
		overflow: "hidden",
		borderRadius: 4
	},
	buttonTouchable: {},
	buttonInner: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: "#f76401"
	},
	buttonInnerDisabled: {
		backgroundColor: "#ebebeb"
	},
	buttonText: {
		fontSize: 14,
		color: "#fff"
	},
	buttonTextDisabled: {
		color: "#939393"
	}
});
