import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import AuthStorage from "../../services/auth-storage";
import { logInFromStorage } from "../../actions/auth";
import { IAppState } from "../../models";
import { Dispatch } from "../../types";
import {
	IProps,
	IState,
	IDispatchProps,
	IStateProps,
	IOwnProps
} from "./model";
import style from "./styles";

class SplahScreen extends Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.bootstrap();
	}

	bootstrap = async () => {
		const userToken = await AuthStorage.getToken();
		if (userToken) {
			this.props.dispatch(logInFromStorage(userToken));
			this.props.navigation.navigate("App");
		} else {
			this.props.navigation.navigate("Auth");
		}
	};

	render() {
		return (
			<View style={style.splash}>
				<ActivityIndicator color="#fff" size="large" />
			</View>
		);
	}
}

export default connect<IStateProps, IDispatchProps, IOwnProps, IAppState>(
	(state, ownProps) => ({}),
	(dispatch: Dispatch, ownProps) => ({
		dispatch
	})
)(SplahScreen);

//https://github.com/react-navigation/react-navigation/issues/1878
