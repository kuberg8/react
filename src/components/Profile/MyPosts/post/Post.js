import React from 'react';
import st from './post.module.css'

function Post(props) {
	return (
		<div className={st.post}>
			<div className={st.name}>{props.name}</div>
			<div>{props.text}</div>
			<div>{props.likeCounts} like</div>
		</div>
	)
}

export default Post;