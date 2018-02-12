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
                        color="#028eca"
                        title="Modifier un tarif"
                        onPress={() => navigate("Rates")}
                    />
                </View>
                <View style={style.buttonView}>
                    <Button
                        color="#028eca"
                        title="Modifier une chambre"
                        onPress={() => navigate("Rooms")}
                    />
                </View>
                <View style={style.buttonView}>
                    <Button
                        color="#028eca"
                        title="Modify rates"
                        onPress={() => navigate("SelectAction")}
                    />
                </View>
            </View>
        );
    }
}