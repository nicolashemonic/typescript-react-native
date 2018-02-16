const initialModifyRatesState = {};

export function modifyRates(state = initialModifyRatesState, action: any) {
	switch (action.type) {
		case "SELECT_RATES":
			return {
				...state
			};
		default:
			return state;
	}
}
