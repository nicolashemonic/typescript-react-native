import React, { Component } from "react";

import { View } from "react-native";

import ActionFooter from "../../components/action-footer";

import { CalendarList } from "react-native-calendars";

import styles from "./styles";

export default class SelectDatesScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Select dates to edit"
	};

	constructor(props) {
		super(props);
		this.state = {
			markedDates: {}
		};
	}

	selectAction = () => {
		this.setState({});
	};

	onDayPress = day => {
		const markedDates = {
			...this.state.markedDates
		};
		if (markedDates[day.dateString]) {
			delete markedDates[day.dateString];
		} else {
			markedDates[day.dateString] = {
				color: "#d0534e",
				textColor: "white"
			};
		}
		this.setState({
			markedDates: markedDates
		});
	};

	selectedDatesLabel = () => {
		const dates = Object.keys(this.state.markedDates).length;
		if (!dates) {
			return "No date selected";
		}
		if (dates == 1) {
			return "1 date selected";
		}
		return `${dates} dates selected`;
	};

	render() {
		const dates = Object.keys(this.state.markedDates).length;
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.selectDates}>
				<CalendarList
					firstDay={1}
					minDate={"2018-02-13"}
					pastScrollRange={0}
					futureScrollRange={14}
					markedDates={this.state.markedDates}
					markingType={"period"}
					onDayPress={this.onDayPress}
				/>
				<ActionFooter
					style={styles.selectDatesActionFooter}
					text={this.selectedDatesLabel()}
					onPress={() => navigate("SelectConfirm")}
					disabled={!dates}
				/>
			</View>
		);
	}
}
