import React, { Component } from "react";

import { FlatList, View, Text } from "react-native";

import Button from "../components/button";

import ListItem from "../components/list-item";

import style from "../styles/select-rates";

export default class SelectRatesScreen extends Component<any, any> {
	static navigationOptions = {
		title: "Pick rates to edit"
	};

	constructor(props) {
		super(props);
		this.state = {
			rates: [
				{ key: "Public rate (RACKPRI)", selected: false },
				{ key: "Best available rate (BAR)", selected: false },
				{ key: "Romantic Stay (3NIGHTS)", selected: false },
				{ key: "Weekend rate (WEEKEND)", selected: false },
				{ key: "Booking (BOOKING) ", selected: false },
				{ key: "Best early rate (EARLY) ", selected: false },
				{ key: "Last minute rate (LASTMIN)", selected: false },
				{ key: "Promotional rate (PROMO3) ", selected: false },
				{ key: "Last minute rate (LASTMI3) ", selected: false },
				{ key: "2 nights (2NUIT) ", selected: false },
				{ key: "Promotional rate (PROMO6)", selected: false },
				{ key: "Release rate (RELEASE) ", selected: false },
				{ key: "Last minute rate (LASTMI2)", selected: false },
				{ key: "Special offer (SOR)", selected: false },
				{ key: "Promotional rate (PROMO8)", selected: false }
			]
		};
	}

	toggleRate = item => {
		this.setState({
			rates: this.state.rates.map(rate => {
				return rate.key == item.key
					? {
							...rate,
							selected: !rate.selected
						}
					: rate;
			})
		});
	};

	selectedRatesLabel = () => {
		const selectedRates = this.state.rates.filter(rate => rate.selected);
		if (!selectedRates.length) {
			return "No rate selected";
		}
		if (selectedRates.length == 1) {
			return "1 rate selected";
		}
		return `${selectedRates.length} rates selected`;
	};

	render() {
		const { navigate } = this.props.navigation;
		const selectedRates = this.state.rates.filter(rate => rate.selected);

		return (
			<View style={style.ratesView}>
				<FlatList
					data={this.state.rates}
					renderItem={({ item }) => (
						<ListItem item={item} onPress={this.toggleRate} />
					)}
				/>
				<View style={style.ratesFooter}>
					<View style={style.ratesFooterInner}>
						<View style={style.ratesTextView}>
							<Text style={style.ratesText}>{this.selectedRatesLabel()}</Text>
						</View>
						<View style={style.ratesButton}>
							<Button
								title="next"
								onPress={() => navigate("SelectDates")}
								disabled={!selectedRates.length}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
