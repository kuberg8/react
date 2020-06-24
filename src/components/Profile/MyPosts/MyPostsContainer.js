import React from 'react';

import {addPostActionCreator, deletePostActionCreator} from '../../../redux/profile-reducer.js'
import MyPosts from './MyPosts.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		postsData: state.profile.postsData,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (text) => { dispatch( addPostActionCreator(text) ) },
		deletePost: (id) => { dispatch( deletePostActionCreator(id) ) },
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;