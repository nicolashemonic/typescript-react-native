import React from "react";

import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	View
} from "react-native";

import FontAwesome, { Icons } from "react-native-fontawesome";

import style from "../styles/list-item";

const Touchable =
	Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export default props => (
	<View style={style.listItem}>
		<Touchable
			style={style.listItemTouchable}
			onPress={() => props.onPress(props.item)}>
			<View style={style.listItemInner}>
				<View style={style.listItemAction}>
					<View
						style={[
							style.listItemCheckbox,
							props.item.selected ? style.listItemCheckboxSelected : null
						]}>
						{props.item.selected && (
							<FontAwesome style={style.listItemCheckboxIcon}>
								{Icons.check}
							</FontAwesome>
						)}
					</View>
				</View>
				<Text style={style.listItemText}>{props.item.key}</Text>
			</View>
		</Touchable>
	</View>
);
