import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	selectAction: {
		flex: 1,
		backgroundColor: colors.background.primary
	},
	openActionTouchable: {
		flex: 1,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: colors.border.primary
	},
	openActionInner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	closeActionTouchable: {
		flex: 1
	},
	closeActionInner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	closeActionIcon: {
		fontSize: 40,
		color: colors.alerting.attention,
		marginBottom: 20
	},
	openActionIcon: {
		fontSize: 40,
		color: colors.alerting.validation,
		marginBottom: 20
	},
	openAction: {
		fontSize: 16
	},
	closeAction: {
		fontSize: 16
	}
});
