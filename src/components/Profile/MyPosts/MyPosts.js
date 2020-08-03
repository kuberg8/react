import React from 'react';
import pt from './MyPost.module.css'
import {Field, reduxForm} from 'redux-form'


import Post from './post/Post.js'




function PostForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
					autocomplete="off" 
					placeholder="Что у Вас нового?" 
					name="postText" 
					component="input" />
			</div>
			<button>Опубликовать</button>
		</form>
	)
}

const PostReduxForm = reduxForm({
	form: 'post'
})(PostForm)





function MyPosts(props) {

	let postsElements = props.postsData.map( (p) => {
		return (<Post 
			name={p.name} 
			id={p.id} 
			key={p.id} 
			text={p.text} 
			likeCounts={p.likeCounts} 
			deletePost={props.deletePost}
			isOwner={props.isOwner} />)
	})



	function AddNewPost(value) {
		if (value.postText != null) {
			props.addPost(value.postText)
			value.postText = null			
		}
 
	}



	return (
		<div className={pt.posts}>
			<span className={pt.MyPosts}>
				Мои Посты
				<PostReduxForm onSubmit={AddNewPost} />
			</span>
			{postsElements}
		</div>
	)
	
}


export default MyPosts;