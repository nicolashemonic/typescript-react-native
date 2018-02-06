/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import SplashScreen from "./screens/splash";
import LoginScreen from "./screens/login";
import PlanningScreen from "./screens/planning";
import RatesScreen from "./screens/rates";

import {
  StackNavigator
} from 'react-navigation';

export default StackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Planning: { screen: PlanningScreen },
  Rates: { screen: RatesScreen }
});