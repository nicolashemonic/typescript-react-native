import React from "react";

import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    Text,
    View
} from "react-native";

import style from "../styles/list-item";

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

export default (props) =>
    <Touchable style={style.touchable} onPress={props.onPress}>
        <View style={style.view}>
            <Text style={style.text}>
                {props.children}
            </Text>
            <Text style={style.action}>modifier</Text>
        </View>
    </Touchable>;