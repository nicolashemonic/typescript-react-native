import { NavigationScreenProps } from "react-navigation";

export interface IOwnProps {}

export interface IStateProps {}

export interface IDispatchProps {
	logIn: (email: string, password: string) => Promise<void>;
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
