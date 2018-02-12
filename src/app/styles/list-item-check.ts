import { StyleSheet } from "react-native";

export default StyleSheet.create({
    touchable: {},
    view: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
        color: "#222"
    },
    action: {
        paddingRight: 10
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#222',
        borderRadius: 4
    },
    checkboxSelected: {
        backgroundColor: "#028eca"
    }
});