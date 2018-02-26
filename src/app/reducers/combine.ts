import { combineReducers, ReducersMapObject } from "redux";
import modifyRates from "./modify-rates";
import navigation from "./navigation";

const reducer = combineReducers({
	modifyRates,
	navigation: navigation
} as ReducersMapObject);

export default reducer;
