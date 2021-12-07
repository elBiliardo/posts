import { showAlertA } from './actions'
import { CREATE_POST } from './types'

const forbidden = ['fuck', 'spam', 'php']

export const forbiddenWordsMiddleware = ({ dispatch }) => {
	return (next) => (action) => {
		if (action.type === CREATE_POST) {
			const found = forbidden.filter(word => action.payload.title.includes(word))
			if (found.length) {
				return dispatch(showAlertA('You are spamer! Go home!'))
			}
		}
		return next(action)
	}
}
