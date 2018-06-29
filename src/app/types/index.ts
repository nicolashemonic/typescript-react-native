import { ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IAppState } from "../models";
import { AppAction } from "../actions";

export type AsyncActionCreator = ActionCreator<
	ThunkAction<Promise<void>, IAppState, null, AppAction>
>;

export type Dispatch = ThunkDispatch<IAppState, null, AppAction>;
