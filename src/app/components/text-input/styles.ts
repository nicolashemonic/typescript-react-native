import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
	textInput: {},
	textInputNative: {
		color: colors.text.primary,
		fontSize: 14,
		paddingTop: 20,
		paddingBottom: 10,
		paddingHorizontal: 0,
		borderBottomColor: colors.border.primary,
		borderBottomWidth: StyleSheet.hairlineWidth
	}
});
