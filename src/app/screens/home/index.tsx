import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "../../actions/auth";
import { View } from "react-native";
import { IAppState } from "../../models";
import { Dispatch } from "../../types";
import Button from "../../components/button";
import {
	IState,
	IProps,
	IDispatchProps,
	IStateProps,
	IOwnProps
} from "./model";
import style from "./styles";

class HomeScreen extends Component<IProps, IState> {
	static navigationOptions = {
		title: "Home"
	};

	showMoreApp = () => this.props.navigation.navigate("Details");

	logOut = () => this.props.dispatch(logOut());

	render() {
		return (
			<View style={style.home}>
				<Button title="Show me more of the app" onPress={this.showMoreApp} />
				<Button title="Actually, log me out :)" onPress={this.logOut} />
			</View>
		);
	}
}

export default connect<IStateProps, IDispatchProps, IOwnProps, IAppState>(
	(state, ownProps) => ({}),
	(dispatch: Dispatch, ownProps) => ({
		dispatch
	})
)(HomeScreen);
