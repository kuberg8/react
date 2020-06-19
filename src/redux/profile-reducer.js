import {usersAPI} from '../api/api.js' 
import {profileAPI} from '../api/api.js'
import {stopSubmit} from 'redux-form'


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = "SET-STATUS"
const SET_PHOTO = "SET-PHOTO"
const SET_INFO = "SET_INFO"



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
	} else if(action.type === SET_PHOTO) {

		return {
			...state,
			userProfile: {...state.userProfile, photos: action.photos}
		}
	} else if(action.type === SET_INFO) {
		
		return {
			...state,
			userProfile: {...state.userProfile, "???": action.info}
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


function setPhotoAC(photos) {
	return {
		type: SET_PHOTO,
		photos 
	}
}

function setInfoAC(info) {
	return {
		type: SET_INFO,
		info 
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
		if(response.data.resultCode === 0) {
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


export const savePhotoThunkCreator = (file) => {
	return async (dispatch) => { 
		let response = await profileAPI.savePhoto(file)
		if(response.data.resultCode === 0) {
			dispatch( setPhotoAC(response.data.data.photos) ) 
		}
	}
}


export const saveInfoThunkCreator = (info) => {
	return async (dispatch, getState) => { 
		let userId = getState().auth.id
		let response = await profileAPI.saveInfo(info)
		if(response.data.resultCode === 0) {
			dispatch( getUserProfileThunkCreator(userId) )  
		} else {
			dispatch( stopSubmit("profile", {_error: "wrong URL"}) )
		}
	}
}



export default profileReducer;