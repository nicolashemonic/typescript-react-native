/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import SplashScreen from "./screens/splash";
import LoginScreen from "./screens/login";
import PlanningScreen from "./screens/planning";
import RatesScreen from "./screens/rates";
import RoomsScreen from "./screens/rooms";
import SelectRatesScreen from "./screens/select-rates";
import SelectActionScreen from "./screens/select-action";
import SelectDatesScreen from "./screens/select-dates";
import SelectConfirmScreen from "./screens/select-confirm";

import {
  StackNavigator
} from 'react-navigation';

export default StackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Planning: { screen: PlanningScreen },
  Rates: { screen: RatesScreen },
  Rooms: { screen: RoomsScreen },

  SelectRates: { screen: SelectRatesScreen },
  SelectAction: { screen: SelectActionScreen },
  SelectDates: { screen: SelectDatesScreen },
  SelectConfirm: { screen: SelectConfirmScreen }
});