import { NavigationActions, NavigationScreenProp } from "react-navigation";

let navigator: NavigationScreenProp<any, any>;

function setTopLevelNavigator(navigatorRef: NavigationScreenProp<any, any>) {
	navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params
		})
	);
}

export default {
	navigate,
	setTopLevelNavigator
};
