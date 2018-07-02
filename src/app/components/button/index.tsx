import React from "react";
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	View
} from "react-native";
import { IProps } from "./model";
import styles from "./styles";

const Touchable =
	Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export default (props: IProps) => {
	return props.disabled ? (
		<View style={[styles.button, styles.buttonDisabled]}>
			<Text style={[styles.buttonText, styles.buttonTextDisabled]}>
				{props.title}
			</Text>
		</View>
	) : (
		<Touchable onPress={props.onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{props.title}</Text>
			</View>
		</Touchable>
	);
};
