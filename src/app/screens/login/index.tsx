import React, { Component } from "react";

import { Button, View, Text } from "react-native";

import style from "./styles";

import TextInput from "../../components/text-input";

export default class LoginScreen extends Component<any, any> {
	navigationWillFocus: any;
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

	componentDidMount() {
		this.navigationWillFocus = this.props.navigation.addListener(
			"willFocus",
			() => {
				if (this.state.email || this.state.password) {
					this.setState({
						email: "",
						password: ""
					});
				}
			}
		);
	}

	componentWillUnmount() {
		this.navigationWillFocus.remove();
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

	submit = () => {
		this.inputRef["password"].blur();
		this.props.navigation.navigate("Planning");
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.login}>
				<Text style={style.loginFormText}>
					Log in with your Availpro account.
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
					onSubmitEditing={this.submit}
				/>
				<View style={style.loginFormButton}>
					<Button
						color="#028eca"
						title="Log In"
						onPress={() => navigate("Planning")}
					/>
				</View>
			</View>
		);
	}
}
