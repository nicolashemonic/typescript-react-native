import React from "react";

import { View, Text } from "react-native";

import Button from "../../components/button";

import styles from "./styles";

export default props => (
	<View style={[styles.actionFooter, props.style]}>
		<View style={styles.actionFooterInner}>
			<View style={styles.actionFooterTextWrapper}>
				<Text style={styles.actionFooterText}>{props.text}</Text>
			</View>
			<View style={styles.actionFooterButtonWrapper}>
				<Button
					title="next"
					onPress={props.onPress}
					disabled={props.disabled}
				/>
			</View>
		</View>
	</View>
);
