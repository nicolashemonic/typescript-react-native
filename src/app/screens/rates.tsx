import React, { Component } from 'react';

import {
    Button,
    View
} from 'react-native';

import style from "../styles/rates";

export default class PlanningScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Rates',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.ratesView}>
                <View style={style.buttonView}>
                    <Button
                        title="View Planning"
                        onPress={() => navigate("Planning")}
                    />
                </View>
            </View>
        );
    }
}