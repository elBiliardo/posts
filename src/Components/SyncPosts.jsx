import React from 'react'
import { useSelector } from 'react-redux'

import { Post } from './Post'

export const SyncPosts = () => {
	const syncPosts = useSelector(state => state.postsR.syncPosts)

	return (
		<>
			{syncPosts.length ?
				syncPosts.map(post => <Post post={post} key={post.id} />)
				: <p className='text-center'>There are no posts yet</p>}
		</>
	)
}