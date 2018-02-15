import React from "react";

import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	View
} from "react-native";

import styles from "./styles";

const Touchable =
	Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export default props => {
	const Button = props.disabled ? View : Touchable;

	return (
		<Button
			style={[styles.button, props.disabled ? styles.buttonDisabled : null]}
			onPress={props.disabled ? undefined : props.onPress}>
			<Text
				style={[
					styles.buttonText,
					props.disabled ? styles.buttonTextDisabled : null
				]}>
				{props.title}
			</Text>
		</Button>
	);
};
