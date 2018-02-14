import React from "react";

import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	View
} from "react-native";

import style from "../styles/button";

const Touchable =
	Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const onPress = props => {
	if (!props.disabled) {
		return props.onPress;
	}
};

export default props => (
	<View style={style.button}>
		<Touchable style={style.buttonTouchable} onPress={onPress(props)}>
			<View
				style={[
					style.buttonInner,
					props.disabled ? style.buttonInnerDisabled : null
				]}>
				<Text
					style={[
						style.buttonText,
						props.disabled ? style.buttonTextDisabled : null
					]}>
					{props.title}
				</Text>
			</View>
		</Touchable>
	</View>
);
