import {
	createStackNavigator,
	createSwitchNavigator,
	NavigationScreenOptions
} from "react-navigation";
import SplashScreen from "./screens/splash";
import LogInScreen from "./screens/login";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";

const navigationOptions: NavigationScreenOptions = {
	headerStyle: {
		backgroundColor: "#028eca"
	},
	headerTintColor: "#fff"
};

const AppStack = createStackNavigator(
	{
		Home: HomeScreen,
		Details: DetailsScreen
	},
	{
		navigationOptions: navigationOptions
	}
);
const AuthStack = createStackNavigator(
	{ LogIn: LogInScreen },
	{
		navigationOptions: navigationOptions
	}
);

export default createSwitchNavigator(
	{
		Splash: SplashScreen,
		Auth: AuthStack,
		App: AppStack
	},
	{
		initialRouteName: "Splash"
	}
);
