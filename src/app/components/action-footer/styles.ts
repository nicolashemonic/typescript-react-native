import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	actionFooter: {
		backgroundColor: colors.background.primary,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: colors.border.primary
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
		fontSize: 16
	},
	actionFooterButtonWrapper: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: "flex-end"
	}
});
