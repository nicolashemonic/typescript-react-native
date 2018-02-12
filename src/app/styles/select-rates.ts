import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ratesView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 55
    },
    ratesFooter: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e2e2e2"
    },
    ratesFooterInner: {
        flex: 1,
        flexDirection: "row"
    },
    ratesTextView: {
        flex: 3,
        paddingLeft: 20,
        justifyContent: "center"
    },
    ratesText: {
        color: "#222",
        fontSize: 16
    },
    ratesButton: {
        flex: 1,
        padding: 10
    }
});