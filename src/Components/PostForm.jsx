import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createPostA, showAlertA } from '../Redux/actions'
import { Alert } from './UI/Alert'

export const PostForm = () => {
	const dispatch = useDispatch()
	const alert = useSelector(state => state.appR.alert)
	const [title, setTitle] = useState('')

	const submitHandler = (event) => {
		event.preventDefault()
		if(!title.trim()) return dispatch(showAlertA('Title of the post can`t be empty'))

		const newPost = {
			title, 
			id: Date.now().toString()
		}
		dispatch(createPostA(newPost))
		setTitle('')
	}

	const inputHandler = (event) => {
		setTitle(event.target.value)
	}

	return (
		<form onSubmit={submitHandler}>
			{alert && <Alert text={alert}/>}
			<h2>Post Title</h2>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
					value={title}
					onChange={inputHandler}
				/>
			</div>
			<button type="submit" className="btn btn-success">
				Create
			</button>
		</form>
	)
}