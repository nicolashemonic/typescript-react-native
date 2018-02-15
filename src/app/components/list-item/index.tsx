import React from "react";

import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	View
} from "react-native";

import FontAwesome, { Icons } from "react-native-fontawesome";

import styles from "./styles";

const Touchable =
	Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export default props => (
	<View style={styles.listItem}>
		<Touchable
			style={styles.listItemTouchable}
			onPress={() => props.onPress(props.item)}>
			<View style={styles.listItemInner}>
				<View style={styles.listItemAction}>
					<View
						style={[
							styles.listItemCheckbox,
							props.item.selected ? styles.listItemCheckboxSelected : null
						]}>
						{props.item.selected && (
							<FontAwesome style={styles.listItemCheckboxIcon}>
								{Icons.check}
							</FontAwesome>
						)}
					</View>
				</View>
				<Text style={styles.listItemText}>{props.item.key}</Text>
			</View>
		</Touchable>
	</View>
);
