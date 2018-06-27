import React, { Component } from "react";

import { Button, View, AsyncStorage } from "react-native";

import style from "./styles";

export default class HomeScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Home",
		headerStyle: {
			backgroundColor: "#028eca"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};

	showMoreApp = () => {
		this.props.navigation.navigate("Details");
	};

	logOut = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate("Auth");
	};

	render() {
		return (
			<View style={style.home}>
				<View style={style.homeButtons}>
					<Button title="Show me more of the app" onPress={this.showMoreApp} />
					<Button title="Actually, log me out :)" onPress={this.logOut} />
				</View>
			</View>
		);
	}
}
