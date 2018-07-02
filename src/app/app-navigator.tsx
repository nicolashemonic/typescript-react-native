import {
	createStackNavigator,
	createSwitchNavigator,
	NavigationScreenOptions
} from "react-navigation";
import SplashScreen from "./screens/splash";
import LogInScreen from "./screens/login";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import colors from "./styles/colors";

const navigationOptions: NavigationScreenOptions = {
	headerStyle: {
		backgroundColor: colors.brand.primary
	},
	headerTintColor: colors.text.bright
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
