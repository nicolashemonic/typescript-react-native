import { NavigationActions } from "react-navigation";

let navigator;

function setTopLevelNavigator(navigatorRef) {
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
