import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: colors.brand.emphasis,
		borderRadius: 4
	},
	buttonDisabled: {
		backgroundColor: colors.background.secondary
	},
	buttonText: {
		fontSize: 14,
		color: colors.text.bright
	},
	buttonTextDisabled: {
		color: colors.text.secondary
	}
});
