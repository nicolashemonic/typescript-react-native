import { ActionCreator, Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IState as IAppState } from "../models";
import { AppAction } from "../actions";

export type AsyncActionCreator = ActionCreator<
	ThunkAction<Promise<void>, IAppState, null, AppAction>
>;

export type Dispatch = ThunkDispatch<IAppState, null, AppAction>;
