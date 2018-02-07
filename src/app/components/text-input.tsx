import React from "react";

import {
    TextInput as TextInputNative,
    View,
    StyleSheet,
    Animated
} from "react-native";

//import style from "../styles/text-input";

export default class TextInput extends React.Component<any, any> {
    _animatedIsFocused: any;

    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        };
    }

    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.state.value === "" ? 0 : 1);
    }

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
            duration: 200
        }).start();

    }

    handleFocus = () => this.setState({ isFocused: true });

    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const style = StyleSheet.create({
            view: {
                paddingTop: 18
            },
            textInput: {
                color: "#222",
                height: 26,
                fontSize: 14,
                borderBottomColor: "#e2e2e2",
                borderBottomWidth: 1
            }
        });

        const styleText = {
            position: "absolute",
            left: 0,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0]
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [14, 12]
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ["#939393", "#222"]
            })
        }

        return <View style={[style.view, this.props.style]}>
            <Animated.Text style={styleText}>
                {this.props.label.toUpperCase()}
            </Animated.Text>
            <TextInputNative
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[style.textInput]}
                onChangeText={this.props.onChangeText}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                value={this.props.value}
                secureTextEntry={this.props.secureTextEntry} />
        </View>;
    }
}
