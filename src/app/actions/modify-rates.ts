export type ModifyRatesAction = ToggleRate;

type ToggleRate = {
	type: "TOGGLE_RATE";
	key: string;
};

export function toggleRate(key: string): ToggleRate {
	return {
		type: "TOGGLE_RATE",
		key: key
	};
}
