import React from "react";
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	View
} from "react-native";
import { IProps } from "./model";
import style from "./style";

const Touchable =
	Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export default (props: IProps) => {
	return props.disabled ? (
		<View style={[style.button, style.buttonDisabled]}>
			<Text style={[style.buttonText, style.buttonTextDisabled]}>
				{props.title}
			</Text>
		</View>
	) : (
		<Touchable onPress={props.onPress}>
			<View style={style.button}>
				<Text style={style.buttonText}>{props.title}</Text>
			</View>
		</Touchable>
	);
};
