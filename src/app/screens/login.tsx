import React, { Component } from 'react';

import {
    Button,
    View,
    Text
} from 'react-native';

import style from "../styles/login";

import TextInput from "../components/text-input";

export default class PlanningScreen extends Component<any, any> {
    _sub: any;

    static navigationOptions = {
        title: 'Connectez-vous',
    };

    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        this._sub = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.setState({
                    email: "",
                    password: ""
                })
            }
        );
    }

    componentWillUnmount() {
        this._sub.remove();
    }

    onChangeEmail = (value) => {
        this.setState({
            email: value
        });
    }

    onChangePassword = (value) => {
        this.setState({
            password: value
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.loginView}>
                <View style={style.formView}>
                    <Text style={style.formText}>Connectez-vous à votre compte Availpro</Text>
                    <TextInput label="email" value={this.state.email} onChangeText={this.onChangeEmail} />
                    <TextInput label="mot de passe" value={this.state.password} onChangeText={this.onChangePassword} secureTextEntry={true} style={style.password} />
                    <View style={style.buttonView}>
                        <Button
                            title="Valider"
                            onPress={() => navigate("Planning")}
                        />
                    </View>
                </View>
            </View>
        );
    }
}