import { StyleSheet } from "react-native";

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
		backgroundColor: "#d0534e",
		alignItems: "center",
		justifyContent: "center"
	},
	iconAction: {
		fontSize: 40,
		color: "#fff",
		marginBottom: 10
	},
	titleText: {
		fontSize: 20,
		color: "#fff"
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
		color: "#222"
	},
	sectionValueText: {
		fontSize: 14,
		color: "#222",
		marginTop: 10
	},
	buttonView: {
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 20,
		alignItems: "center",
		borderTopWidth: 1,
		borderTopColor: "#e2e2e2"
	}
});
