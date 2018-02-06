import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';

import style from "../styles/splash";

import availproLogo from "static/availpro.png";

export default class LoginScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Availpro',
        headerStyle: {
            display: "none"
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={style.splashView}>
                <View style={style.logoView}>
                    <Image style={style.availproLogo} source={availproLogo} />
                </View>
                <View style={style.buttonView}>
                    <Touchable
                        accessibilityComponentType="button"
                        onPress={() => navigate('Login')}>
                        <View style={style.loginButton}>
                            <Text style={style.loginButtonText}>Se connecter</Text>
                        </View>
                    </Touchable>
                </View>
            </View>
        );
    }
}