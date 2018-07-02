import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import style from "./style";
import { IAppState } from "../../models";
import { Dispatch } from "../../types";
import {
	IProps,
	IState,
	IStateProps,
	IDispatchProps,
	IOwnProps
} from "./model";

class DetailsScreen extends Component<IProps, IState> {
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

export default connect<IStateProps, IDispatchProps, IOwnProps, IAppState>(
	(state, ownProps) => ({}),
	(dispatch: Dispatch, ownProps) => ({
		dispatch
	})
)(DetailsScreen);
