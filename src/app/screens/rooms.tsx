import React, { Component } from "react";

import {
    Text,
    Modal,
    StyleSheet,
    View,
    Button
} from "react-native";

export default class RoomsScreen extends Component<any, any> {
    static navigationOptions = {
        title: 'Chambres',
    };

    state = {
        modalVisible: false,
    };

    openModal() {
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text>This is content inside of modal component</Text>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Close modal"
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>
                <Button
                    onPress={() => this.openModal()}
                    title="Open modal"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    innerContainer: {
        alignItems: 'center',
    },
});