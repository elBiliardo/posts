import React from 'react'

import { PostForm } from './PostForm'
import { SyncPosts } from './SyncPosts'
import { AsyncPosts } from './AsyncPosts'

export const App = () => {
	return (
		<div className='container'>
			<div className="row my-5">
				<PostForm />
			</div>
			<div className="row">
				<div className="col me-3">
					<h3 className="mb-3">SyncPosts</h3>
					<SyncPosts />
				</div>
				<div className="col ms-3">
					<h3 className="mb-3">AsyncPosts</h3>
					<AsyncPosts />
				</div>
			</div>
		</div>
	)
}
