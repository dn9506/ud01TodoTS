import { TScreenReducerAction, countActionScreen } from '../types'

export const screenReducer = (
	state: string | null,
	action: TScreenReducerAction
) => {
	switch (action.type) {
		case countActionScreen.CHANGE_SCREEN: {
			return {
				state: action.payload,
			}
		}
		default: {
			return state
		}
	}
}
