import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";
import { logIn } from "../../actions/auth";
import style from "./styles";
import TextInput from "../../components/text-input";
import { IState as IAppState } from "../../models";
import { Dispatch } from "../../types";
import {
	IProps,
	IState,
	IStateProps,
	IDispatchProps,
	IOwnProps
} from "./model";
import { ThunkDispatch } from "redux-thunk";

class LoginScreen extends Component<IProps, IState> {
	inputRef = [];

	static navigationOptions = {
		title: "Log In",
		headerStyle: {
			backgroundColor: "#028eca"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
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

	logIn = () => this.props.logIn("email", "password");

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
					<Button color="#028eca" title="Log In" onPress={this.logIn} />
				</View>
			</View>
		);
	}
}

export default connect<IStateProps, IDispatchProps, IOwnProps, IAppState>(
	(state, ownProps) => ({}),
	(dispatch: Dispatch, ownProps) => {
		return {
			logIn: (email, password) => dispatch(logIn(email, password))
		};
	}
)(LoginScreen);
