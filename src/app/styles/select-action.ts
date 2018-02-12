import { StyleSheet } from "react-native";

export default StyleSheet.create({
    actionView: {
        flex: 1,
        backgroundColor: "#fff",
    },
    openActionWrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    closeActionWrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    openAction: {
        fontSize: 20,
        color: "#82b00a"
    },
    closeAction: {
        fontSize: 20,
        color: "#d0534e"
    }
});