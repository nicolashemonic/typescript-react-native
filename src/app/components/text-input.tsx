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
        this._animatedIsFocused = new Animated.Value(this.props.value === "" ? 0 : 1);
    }

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
            duration: 100
        }).start();
    }

    handleFocus = () => this.setState({ isFocused: true });

    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const style = StyleSheet.create({
            view: {},
            textInput: {
                color: "#222",
                fontSize: 14,
                paddingTop: 20,
                paddingBottom: 10,
                paddingHorizontal: 0,
                borderBottomColor: "#028eca",
                borderBottomWidth: 1
            }
        });

        const styleText = {
            position: "absolute",
            left: 0,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [25, 0]
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
                keyboardType={this.props.keyboardType ? this.props.keyboardType : "default"}
                autoCorrect={this.props.autoCorrect ? this.props.autoCorrect : true}
                secureTextEntry={this.props.secureTextEntry}
                onSubmitEditing={this.props.onSubmitEditing}
                ref={this.props.inputRef} />
        </View>;
    }
}
