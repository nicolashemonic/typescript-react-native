import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    loginView: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        // alignItems: "center",
        backgroundColor: "#056693"
    },
    logoView: {
        flex: 1
    },
    availproLogo: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "contain",
        marginLeft: "20%",
        marginRight: "20%"
    },
    buttonView: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    loginButton: {},
    loginButtonText: Platform.select<any>({
        ios: {
            color: 'white',
            textAlign: 'center',
            padding: 8,
            fontSize: 20
        },
        android: {
            color: 'white',
            textAlign: 'center',
            padding: 8,
            fontSize: 20
        }
    })
});