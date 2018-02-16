import { combineReducers, ReducersMapObject } from "redux";

import { modifyRates } from "./modify-rates";

//import navigation from "./navigation";

export default combineReducers({
	modifyRates
	//nav: navigation
} as ReducersMapObject);
