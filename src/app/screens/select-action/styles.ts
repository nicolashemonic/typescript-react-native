import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	selectAction: {
		flex: 1,
		backgroundColor: colors.background.primary
	},
	openActionTouchable: {
		flex: 1
	},
	openActionInner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.alerting.validation
	},
	closeActionTouchable: {
		flex: 1
	},
	closeActionInner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.alerting.attention
	},
	iconAction: {
		fontSize: 50,
		color: colors.text.bright,
		marginBottom: 20
	},
	openAction: {
		fontSize: 20,
		color: colors.text.bright
	},
	closeAction: {
		fontSize: 20,
		color: colors.text.bright
	}
});
