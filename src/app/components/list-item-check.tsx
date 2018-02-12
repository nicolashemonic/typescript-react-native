import React from "react";

import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    Text,
    View
} from "react-native";

import FontAwesome, { Icons } from 'react-native-fontawesome';

import style from "../styles/list-item-check";

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

export default (props) =>
    <Touchable style={style.touchable} onPress={() => props.onPress(props.item)}>
        <View style={style.view}>
            <View style={style.action}>
                <View style={[style.checkbox, props.item.selected ? style.checkboxSelected : null]}>
                    {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
                </View>
            </View>
            <Text style={style.text}>
                {props.item.key}
            </Text> 
        </View>
    </Touchable>;