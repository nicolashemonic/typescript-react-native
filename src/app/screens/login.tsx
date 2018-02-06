import React, { Component } from 'react';

import {
    Button,
    View
} from 'react-native';

import style from "../styles/login";

import TextInput from "../components/text-input";

export default class PlanningScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Connectez-vous à votre compte',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.loginView}>
                <View style={style.formView}>
                    <TextInput label="email" />
                    <TextInput label="mot de passe" style={style.password} />
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