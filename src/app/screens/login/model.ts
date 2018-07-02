import { NavigationScreenProps } from "react-navigation";
import { Dispatch } from "../../types";

export interface IOwnProps {}

export interface IStateProps {}

export interface IDispatchProps {
	dispatch: Dispatch;
}

export interface IProps
	extends NavigationScreenProps,
		IOwnProps,
		IStateProps,
		IDispatchProps {}

export interface IState {
	email: string;
	password: string;
}
