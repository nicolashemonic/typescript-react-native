import React, { Component } from "react";

import { View, Text, ScrollView } from "react-native";

import Button from "../components/button";

import style from "../styles/select-confirm";

import FontAwesome, { Icons } from "react-native-fontawesome";

export default class SelectConfirmScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Edit rate restrictions"
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	selectAction = () => {
		this.setState({});
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView contentContainerStyle={style.contentContainer}>
				<View style={style.confirmView}>
					<View style={style.titleView}>
						<FontAwesome style={style.iconAction}>{Icons.lock}</FontAwesome>
						<Text style={style.titleText}>Will close 2 rates</Text>
					</View>
					<View style={style.sectionsView}>
						<View style={style.sectionView}>
							<Text style={style.sectionTitleText}>Rates</Text>
							<Text style={style.sectionValueText}>
								Best available rate (BAR)
							</Text>
							<Text style={style.sectionValueText}>
								Last minute rate (LASTMIN)
							</Text>
						</View>
						<View style={style.sectionView}>
							<Text style={style.sectionTitleText}>Dates</Text>
							<Text style={style.sectionValueText}>
								from 20 to 2/21/2018 inclusive
							</Text>
							<Text style={style.sectionValueText}>on 5/21/2018</Text>
						</View>
					</View>
					<View style={style.buttonView}>
						<Button
							title="confirm modification"
							onPress={() => navigate("Planning")}
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}
