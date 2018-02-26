import { IRate } from "../models/modify-rates";
import { ModifyRatesAction } from "../actions/modify-rates";

export interface IModifyRatesState {
	actionType: "" | "open" | "close";
	selectedDates: string[];
	rates: IRate[];
}

const initialModifyRatesState: IModifyRatesState = {
	actionType: "",
	selectedDates: [],
	rates: [
		{ key: "RACKPRI", name: "Public rate (RACKPRI)", selected: false },
		{ key: "BAR", name: "Best available rate (BAR)", selected: false },
		{ key: "3NIGHTS", name: "Romantic Stay (3NIGHTS)", selected: true },
		{ key: "WEEKEND", name: "Weekend rate (WEEKEND)", selected: false },
		{ key: "BOOKING", name: "Booking (BOOKING) ", selected: false },
		{ key: "EARLY", name: "Best early rate (EARLY) ", selected: false },
		{ key: "LASTMIN", name: "Last minute rate (LASTMIN)", selected: false },
		{ key: "PROMO3", name: "Promotional rate (PROMO3) ", selected: false },
		{ key: "LASTMI3", name: "Last minute rate (LASTMI3) ", selected: false },
		{ key: "2NUIT", name: "2 nights (2NUIT) ", selected: false },
		{ key: "PROMO6", name: "Promotional rate (PROMO6)", selected: false },
		{ key: "RELEASE", name: "Release rate (RELEASE) ", selected: false },
		{ key: "LASTMI2", name: "Last minute rate (LASTMI2)", selected: false },
		{ key: "SOR", name: "Special offer (SOR)", selected: false },
		{ key: "PROMO8", name: "Promotional rate (PROMO8)", selected: false }
	]
};

export default function modifyRates(
	state = initialModifyRatesState,
	action: ModifyRatesAction
) {
	switch (action.type) {
		case "TOGGLE_RATE":
			return {
				...state,
				rates: state.rates.map(rate => {
					return rate.key == action.key
						? {
								...rate,
								selected: !rate.selected
							}
						: rate;
				})
			};
		default:
			return state;
	}
}
