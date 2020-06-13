import {usersAPI} from '../api/api.js' 
import {profileAPI} from '../api/api.js'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = "SET-STATUS"



let initialState = {
	postsData:[
		{id:1, name: "Alex", likeCounts:"22", text:"Погода хорошая"},
		{id:2, name: "Dima", likeCounts:"10"},
		{id:3, name: "Nikita", likeCounts:"0"},
	],

	userProfile: null,

	status: "",
}


function profileReducer(state = initialState, action) {


	if(action.type === ADD_POST) {
		let newPost = {
		id: 4,
		name: "Rick",
		text: action.postText,
		likeCounts: 0,
		};

		return {
			...state,
			postsData: [newPost, ...state.postsData],
		};

	}  else if(action.type === SET_USER_PROFILE) {

		return {
			...state,
			userProfile: action.userProfile,
		}
	} else if(action.type === SET_STATUS) {

		return {
			...state,
			status: action.status,
		}
	}



	return state;
}






export function addPostActionCreator (text) {
	return {
		type: ADD_POST,
		postText: text,
	}
}



function setUserProfileAC (userProfile) {
	return {
		type: SET_USER_PROFILE,
		userProfile
	}
}

function setStatusAC(status) {
	return {
		type: SET_STATUS,
		status 
	}
}


export const getStatusThunkCreator = (userId) => {
	return async (dispatch) => { 
		let response = await profileAPI.getStatus(userId)
		dispatch( setStatusAC(response.data) ) 
	}
}


export const updateStatusThunkCreator = (status) => {
	return async (dispatch) => { 
		let response = await profileAPI.updateStatus(status)
		if(response.data.resultCod === 0) {
			dispatch( setStatusAC(status) ) 
		}
	}
}



export const getUserProfileThunkCreator = (userId) => {
	return async (dispatch) => { 
		let response = await usersAPI.getProfile(userId)
		dispatch( setUserProfileAC(response.data) ) 
	}
}




export default profileReducer;