import { KeyboardTypeOptions, StyleProp } from "react-native";
import { Component } from "react";

export interface IProps {
	onChangeText: (value: string) => any;
	onSubmitEditing: () => any;
	inputRef: (ref: Component<any>) => any;
	value: string;
	label: string;
	keyboardType?: KeyboardTypeOptions;
	autoCorrect?: boolean;
	secureTextEntry?: boolean;
	style?: StyleProp<any>;
}

export interface IState {
	isFocused: boolean;
}
