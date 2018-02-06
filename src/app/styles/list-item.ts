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
        flex: 3,
        color: "#222"
    },
    action: {
        flex: 1,
        textAlign: "right",
        color: "#028eca"
    }
});