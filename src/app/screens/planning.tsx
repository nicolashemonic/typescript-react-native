import React, { Component } from 'react';

import {
    Button,
    View
} from 'react-native';

import style from "../styles/planning";

export default class PlanningScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Planning',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.planningView}>
                <View style={style.buttonView}>
                    <Button
                        title="Modifier un tarif"
                        onPress={() => navigate("Rates")}
                    />
                </View>
            </View>
        );
    }
}