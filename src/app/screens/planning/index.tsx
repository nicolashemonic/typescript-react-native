import React, { Component } from "react";

import { Button, View } from "react-native";

import style from "./styles";

export default class PlanningScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Planning"
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.planning}>
				<View style={style.planningModifyRates}>
					<Button
						color="#028eca"
						title="Modify rates"
						onPress={() => navigate("SelectAction")}
					/>
				</View>
			</View>
		);
	}
}
