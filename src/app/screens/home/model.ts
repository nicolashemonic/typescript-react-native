import { NavigationScreenProps } from "react-navigation";

export interface IOwnProps {}

export interface IStateProps {}

export interface IDispatchProps {
	logOut: () => Promise<void>;
}

export interface IProps
	extends NavigationScreenProps,
		IOwnProps,
		IStateProps,
		IDispatchProps {}

export interface IState {}
