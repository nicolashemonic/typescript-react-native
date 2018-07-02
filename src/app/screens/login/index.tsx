import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { logIn } from "../../actions/auth";
import style from "./styles";
import Button from "../../components/button";
import TextInput from "../../components/text-input";
import { IAppState } from "../../models";
import { Dispatch } from "../../types";
import {
	IProps,
	IState,
	IStateProps,
	IDispatchProps,
	IOwnProps
} from "./model";

class LoginScreen extends Component<IProps, IState> {
	inputRef = [];

	static navigationOptions = {
		title: "Log In"
	};

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	onChangeEmail = value => {
		this.setState({
			email: value
		});
	};

	onChangePassword = value => {
		this.setState({
			password: value
		});
	};

	addInputRef = (id, ref) => {
		this.inputRef[id] = ref;
	};

	logIn = () => this.props.dispatch(logIn("email", "password"));

	render() {
		return (
			<View style={style.login}>
				<Text style={style.loginFormText}>
					Log in with your personal account.
				</Text>
				<TextInput
					label="email"
					value={this.state.email}
					onChangeText={this.onChangeEmail}
					keyboardType="email-address"
					autoCorrect={false}
					inputRef={ref => this.addInputRef("email", ref)}
					onSubmitEditing={() => this.inputRef["password"].focus()}
				/>
				<TextInput
					label="password"
					value={this.state.password}
					onChangeText={this.onChangePassword}
					secureTextEntry={true}
					style={style.loginFormPassword}
					autoCorrect={false}
					inputRef={ref => this.addInputRef("password", ref)}
					onSubmitEditing={this.logIn}
				/>
				<View style={style.loginFormButton}>
					<Button title="Log In" onPress={this.logIn} />
				</View>
			</View>
		);
	}
}

export default connect<IStateProps, IDispatchProps, IOwnProps, IAppState>(
	(state, ownProps) => ({}),
	(dispatch: Dispatch, ownProps) => {
		return {
			dispatch
		};
	}
)(LoginScreen);
