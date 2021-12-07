import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "../types"

const initialState = {
	loader: false,
	alert: null,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return {
				...state,
				loader: true
			}
		case HIDE_LOADER:
			return {
				...state,
				loader: false
			}
		case SHOW_ALERT:
			return {
				...state,
				alert: action.payload
			}
		case HIDE_ALERT:
			return {
				...state,
				alert: null
			}
		default: return state
	}
}