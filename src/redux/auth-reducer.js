import {authAPI} from '../api/api.js'
import {stopSubmit} from 'redux-form'


const SET_USER_DATA = 'SET-USER-DATA'




let initialState = {
	id: null,
	email: null,
	login: null, 

	isAuth: false,
}


function authReducer(state = initialState, action) {


	if(action.type === SET_USER_DATA) {
		return {
			...state,
			...action.data,
		};
	}

	

	return state;
}





function setUserDataAC(id, email, login, isAuth) {
	return {
		type: SET_USER_DATA,
		data: {id, email, login, isAuth}
		
	}
}


export const getUserDataThunkCreator = () => {
	return async (dispatch) => {	
		let response = await authAPI.me()
		if(response.data.resultCode === 0) {
			let {id, email, login} = response.data.data
			dispatch( setUserDataAC(id, email, login, true) )
		}				
	} 
}


export const loginThunkCreator = (email, password, rememberMe) => {
	return async (dispatch) => {
		let response = await authAPI.login(email, password, rememberMe)
		if(response.data.resultCode === 0) {
			dispatch( getUserDataThunkCreator() )
		} else {
			dispatch( stopSubmit("login", {_error: "wrong email or password"}) )
		}
	}
}


export const logoutThunkCreator = () => {
	return async (dispatch) => {
		let response = await authAPI.logout()
		if(response.data.resultCode === 0) {
			dispatch( setUserDataAC(null, null, null, false) )
		}
	}
}



export default authReducer;