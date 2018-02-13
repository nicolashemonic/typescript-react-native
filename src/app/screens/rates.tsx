import React, { Component } from "react";

import {
    FlatList,
    View
} from "react-native";

import ActionSheet from "react-native-actionsheet";

import ListItem from "../components/list-item";

import style from "../styles/rates";

export default class RatesScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Tarifs',
    };

    ActionSheet: any;

    handlePress = (index) => {
        const { navigate } = this.props.navigation;
        if (index !== 0) {
            navigate("Planning");
        }
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    render() {
        return (
            <View style={style.ratesView}>
                <View style={style.buttonView}>
                    <FlatList
                        data={[
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' },
                            { key: 'Meilleur tarif disponible (BAR)' }
                        ]}
                        renderItem={({ item }) => <ListItem onPress={this.showActionSheet}>{item.key}</ListItem>}
                    />
                </View>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title="Meilleur tarif disponible (BAR)"
                    options={["Annuler", "Ouvrir le tarif", "Fermer le tarif"]}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={2}
                    onPress={this.handlePress}
                    tintColor="#028eca"
                />
            </View>
        );
    }
}