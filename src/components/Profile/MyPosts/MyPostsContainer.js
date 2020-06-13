import React from 'react';

import {addPostActionCreator, } from '../../../redux/profile-reducer.js'
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
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;