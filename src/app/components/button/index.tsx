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
	return props.disabled ? (
		<View style={[styles.button, styles.buttonDisabled]}>
			<Text style={[styles.buttonText, styles.buttonTextDisabled]}>
				{props.title}
			</Text>
		</View>
	) : (
		<View style={styles.button}>
			<Touchable onPress={props.onPress}>
				<Text style={styles.buttonText}>{props.title}</Text>
			</Touchable>
		</View>
	);
};
