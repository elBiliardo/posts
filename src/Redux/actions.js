import { 
	CREATE_POST, 
	GET_ASYNC_POSTS, 
	SHOW_LOADER, 
	HIDE_LOADER, 
	SHOW_ALERT, 
	HIDE_ALERT, 
	REQUEST_POSTS
} from "./types";

export const createPostA = (newPost) => ({ type: CREATE_POST, payload: newPost })

export const showLoaderA = () => ({ type: SHOW_LOADER })
export const hideLoaderA = () => ({ type: HIDE_LOADER })

export const showAlertA = (text) => dispatch => {
	dispatch({type: SHOW_ALERT, payload: text})
	setTimeout(() => { dispatch(hideAlertA()) }, 3000)
}

export const hideAlertA = () => ({ type: HIDE_ALERT })


export const getAsyncPostsA = () => {
	return {type: REQUEST_POSTS}
}