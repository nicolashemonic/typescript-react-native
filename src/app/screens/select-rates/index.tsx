import React, { Component } from "react";
import { Dispatch } from "redux";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import { toggleRate } from "../../actions/modify-rates";
import ListItem from "../../components/list-item";
import ActionFooter from "../../components/action-footer";
import styles from "./styles";
import { IRate } from "../../models/modify-rates";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
	rates: IRate[];
	dispatch: Dispatch<any>;
	navigation: NavigationScreenProp<any, any>;
}

class SelectRatesScreen extends Component<IProps, undefined> {
	static navigationOptions = {
		title: "Pick rates to edit"
	};

	constructor(props) {
		super(props);
	}

	dispatch = action => this.props.dispatch(action);

	toggleRate = item => this.dispatch(toggleRate(item.key));

	selectedRatesLabel = () => {
		const { rates } = this.props;
		const selectedRates = rates.filter(rate => rate.selected);
		if (!selectedRates.length) {
			return "No rate selected";
		}
		if (selectedRates.length == 1) {
			return "1 rate selected";
		}
		return `${selectedRates.length} rates selected`;
	};

	render() {
		const { navigation, rates } = this.props;
		const { navigate } = navigation;
		const selectedRates = rates.filter(rate => rate.selected);

		return (
			<View style={styles.selectRates}>
				<FlatList
					data={rates}
					renderItem={({ item }) => (
						<ListItem item={item} onPress={item => this.toggleRate(item)} />
					)}
				/>
				<ActionFooter
					style={styles.selectRatesActionFooter}
					text={this.selectedRatesLabel()}
					onPress={() => navigate("SelectDates")}
					disabled={!selectedRates.length}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	rates: state.modifyRates.rates
});

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRatesScreen);
