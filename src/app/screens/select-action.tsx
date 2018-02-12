import React, { Component } from "react";

import {
    FlatList,
    View,
    Text,
    Button,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity
} from "react-native";

import ListItem from "../components/list-item-check";

import style from "../styles/select-action";

export default class PlanningScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'What do you wish to do?',
    };

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    selectAction = (action) => {
        this.setState({
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={style.actionView}>
                <Touchable onPress={() => navigate("SelectRates")}>
                    <View style={style.closeActionWrapper}>
                        <Text style={style.closeAction}>Close one or more rates</Text>
                    </View>
                </Touchable>
                <Touchable onPress={() => navigate("SelectRates")}>
                    <View style={style.openActionWrapper}>
                        <Text style={style.openAction}>Open one or more rates</Text>
                    </View>
                </Touchable>
            </View>
        );
    }
}