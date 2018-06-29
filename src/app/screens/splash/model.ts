import { NavigationScreenProps } from "react-navigation";
import { LogInFromStorage } from "../../actions/auth";

export interface IOwnProps {}

export interface IStateProps {}

export interface IDispatchProps {
	logInFromStorage: LogInFromStorage;
}

export interface IProps
	extends NavigationScreenProps,
		IOwnProps,
		IStateProps,
		IDispatchProps {}

export interface IState {}
