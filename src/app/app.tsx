import React from "react";
import AppNavigator from "./app-navigator";
import NavigationService from "./services/navigation";

export default class App extends React.Component<null, null> {
	render() {
		return (
			<AppNavigator
				ref={(ref: any) => NavigationService.setTopLevelNavigator(ref)}
			/>
		);
	}
}
