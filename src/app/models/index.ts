import { IAuthState } from "./auth";

export interface IAppState {
	auth: IAuthState;
}

export * from "./auth";
