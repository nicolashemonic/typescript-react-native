import React, { Component } from "react";

import { View, ActivityIndicator, AsyncStorage } from "react-native";

import style from "./styles";

export default class SplahScreen extends Component<any, any> {

	constructor(props) {
		super(props);
		this.bootstrap();
	}

	bootstrap = async () => {
		const userToken = await AsyncStorage.getItem("userToken");
		this.props.navigation.navigate(userToken ? "App" : "Auth");
	};

	render() {
		return (
			<View style={style.splash}>
				<ActivityIndicator color="#fff" size="large" />
			</View>
		);
	}
}

//https://github.com/react-navigation/react-navigation/issues/1878
