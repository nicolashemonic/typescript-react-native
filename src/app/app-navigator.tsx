import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./screens/splash";
import LogInScreen from "./screens/login";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";

const AppStack = createStackNavigator({
	Home: HomeScreen,
	Details: DetailsScreen
});
const AuthStack = createStackNavigator({ LogIn: LogInScreen });

export default createSwitchNavigator(
	{
		Splash: SplashScreen,
		App: AppStack,
		Auth: AuthStack
	},
	{
		initialRouteName: "Splash"
	}
);
