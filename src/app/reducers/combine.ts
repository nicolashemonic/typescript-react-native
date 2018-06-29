import { combineReducers } from "redux";
import { IState } from "../models";
import { AppAction } from "../actions";
import auth from "./auth";

const reducer = combineReducers<IState, AppAction>({
	auth
});

export default reducer;
