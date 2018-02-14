import { StackNavigator } from "react-navigation";
import SplashScreen from "./screens/splash";
import LoginScreen from "./screens/login";
import PlanningScreen from "./screens/planning";
import SelectActionScreen from "./screens/select-action";
import SelectRatesScreen from "./screens/select-rates";
import SelectDatesScreen from "./screens/select-dates";
import SelectConfirmScreen from "./screens/select-confirm";

export default StackNavigator({
	Splash: { screen: SplashScreen },
	Login: { screen: LoginScreen },
	Planning: { screen: PlanningScreen },
	SelectAction: { screen: SelectActionScreen },
	SelectRates: { screen: SelectRatesScreen },
	SelectDates: { screen: SelectDatesScreen },
	SelectConfirm: { screen: SelectConfirmScreen }
});
