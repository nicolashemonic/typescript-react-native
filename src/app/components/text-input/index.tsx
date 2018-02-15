import React from "react";

import { TextInput as TextInputNative, View, Animated } from "react-native";

import styles from "./styles";

export default class TextInput extends React.Component<any, any> {
	isFocusedAnimation: Animated.Value;

	constructor(props) {
		super(props);
		this.state = {
			isFocused: false
		};
	}

	componentWillMount() {
		this.isFocusedAnimation = new Animated.Value(
			this.props.value === "" ? 0 : 1
		);
	}

	componentDidUpdate() {
		Animated.timing(this.isFocusedAnimation, {
			toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
			duration: 100
		}).start();
	}

	handleFocus = () => this.setState({ isFocused: true });

	handleBlur = () => this.setState({ isFocused: false });

	render() {
		const textInputLabel = {
			position: "absolute",
			left: 0,
			top: this.isFocusedAnimation.interpolate({
				inputRange: [0, 1],
				outputRange: [25, 0]
			}),
			fontSize: this.isFocusedAnimation.interpolate({
				inputRange: [0, 1],
				outputRange: [14, 12]
			}),
			color: this.isFocusedAnimation.interpolate({
				inputRange: [0, 1],
				outputRange: ["#939393", "#222"]
			})
		};

		const {
			onChangeText,
			keyboardType,
			autoCorrect,
			secureTextEntry,
			onSubmitEditing,
			inputRef,
			value,
			label
		} = this.props;

		return (
			<View style={[styles.textInput, this.props.style]}>
				<Animated.Text style={textInputLabel}>
					{label.toUpperCase()}
				</Animated.Text>
				<TextInputNative
					underlineColorAndroid="transparent"
					autoCapitalize="none"
					style={[styles.textInputNative]}
					onChangeText={onChangeText}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					keyboardType={keyboardType ? keyboardType : "default"}
					autoCorrect={autoCorrect ? autoCorrect : true}
					secureTextEntry={secureTextEntry}
					onSubmitEditing={onSubmitEditing}
					ref={inputRef}
					value={value}
				/>
			</View>
		);
	}
}
