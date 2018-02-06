import React from "react";

import {
    TextInput as TextInputNative,
    Text,
    View
} from "react-native";

import style from "../styles/text-input";

export default class TextInput extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return <View style={[style.view, this.props.style]}>
            <Text style={style.text}>
                {this.props.label.toUpperCase()}
            </Text>
            <TextInputNative
                style={[style.textInput]}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text} />
        </View>;
    }
}
