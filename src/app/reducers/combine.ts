import { combineReducers, ReducersMapObject } from "redux";
import authReducer from "./auth";

const reducer = combineReducers({
	authReducer
} as ReducersMapObject);

export default reducer;
