import React, { Component } from "react";

import {
	View,
	Text,
	Image,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity
} from "react-native";

import style from "./styles";

import availproLogo from "static/availpro.png";

export default class SplahScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Availpro",
		headerStyle: {
			display: "none"
		}
	};

	render() {
		const { navigate } = this.props.navigation;
		const Touchable =
			Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
		return (
			<View style={style.splash}>
				<Image style={style.splashLogo} source={availproLogo} />
				<View style={style.splashLogin}>
					<Touchable
						style={style.splashLoginLink}
						accessibilityComponentType="button"
						onPress={() => navigate("Login")}>
						<Text style={style.splashLoginText}>Se connecter</Text>
					</Touchable>
				</View>
			</View>
		);
	}
}

//https://github.com/react-navigation/react-navigation/issues/1878
