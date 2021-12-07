import { CREATE_POST, GET_ASYNC_POSTS } from "../types"

const initialState = {
	syncPosts: [],
	asyncPosts: [],
}

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST: 
			return {
				...state,
				syncPosts: [...state.syncPosts, action.payload]
			}
		case GET_ASYNC_POSTS:
			return {
				...state,
				asyncPosts: action.payload
			}
		default: return state
	}
}