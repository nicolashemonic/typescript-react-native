import React, { Component } from 'react';
import {
    Button
} from 'react-native';

export default class PlanningScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Planning',
    };
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}