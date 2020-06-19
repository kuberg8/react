import React from 'react';
import st from './post.module.css'
import ava from '../../../../assets/img/ava.png'

function Post(props) {
	return (
		<div className={st.post}>
			<img className={st.ava} src={ava} />
			<div className={st.block}>
				<div className={st.name}>{props.name}</div>
				<div>{props.text}</div>
				<div className={st.like}>{props.likeCounts} like</div>
			</div> 
		</div>
	)
}

export default Post;