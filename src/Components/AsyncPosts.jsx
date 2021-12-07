import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { getAsyncPostsA } from '../Redux/actions'
import { Post } from './Post'
import { Loader } from './UI/Loader'


export const AsyncPosts = () => {
	const dispatch = useDispatch()
	const asyncPosts = useSelector(state => state.postsR.asyncPosts)
	const loader = useSelector(state => state.appR.loader)

	if (loader) return <Loader />
	if (!asyncPosts.length) return <button
		type="button"
		className="btn btn-primary"
		onClick={() => dispatch(getAsyncPostsA())}
	>Download</button>

	return (
		<>
			{asyncPosts.map(post => <Post post={post} key={post.id} />)}
		</>
	)
}