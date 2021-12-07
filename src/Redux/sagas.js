import { takeEvery, put, call } from 'redux-saga/effects'
import { hideLoaderA, showAlertA, showLoaderA } from './actions'
import { GET_ASYNC_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
	try {
		yield put(showLoaderA())
		const payload = yield call(getAsyncPostsS) 
		yield put({type: GET_ASYNC_POSTS, payload})
		yield put(hideLoaderA())
	} catch (e) {
		yield put(showAlertA('Somithing was wrong'))
		yield put(hideLoaderA())
	}
}

async function getAsyncPostsS() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	return await response.json()
}