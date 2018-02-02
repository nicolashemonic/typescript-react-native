import React, { Component } from 'react';
import {
    Button
} from 'react-native';

export default class LoginScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Login"
                onPress={() =>
                    navigate('Planning')
                }
            />
        );
    }
}