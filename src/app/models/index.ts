import { IAuthState } from "./auth";

export interface IState {
	auth: IAuthState;
}

export * from "./auth";
