import React from 'react'

export const Post = ({post}) => {
	return (
		<div className="card">
			<div className="card-body">
				{post.title}
			</div>
		</div>
	)
}