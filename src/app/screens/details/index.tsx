import React, { Component } from "react";
import { View, Text } from "react-native";
import style from "./styles";

export default class DetailsScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Details"
	};

	render() {
		return (
			<View style={style.other}>
				<Text>Details</Text>
			</View>
		);
	}
}
