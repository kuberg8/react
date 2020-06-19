import {authAPI} from '../api/api.js'
import {securityAPI} from '../api/api.js'
import {stopSubmit} from 'redux-form'


const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL = 'GET-CAPTCHA-URL'




let initialState = {
	id: null,
	email: null,
	login: null, 
	captchaUrl: null,
	isAuth: false,
}


function authReducer(state = initialState, action) {


	if(action.type === SET_USER_DATA) {
		return {
			...state,
			...action.data,
		};
	} else if(action.type === GET_CAPTCHA_URL) {
		return {
			...state,
			...action.captchaUrl,
		}
	}

	

	return state;
}





function setUserDataAC(id, email, login, isAuth) {
	return {
		type: SET_USER_DATA,
		data: {id, email, login, isAuth}
		
	}
}


function getCaptchaUrlAC(captchaUrl) {
	return {
		type: GET_CAPTCHA_URL,
		captchaUrl: {captchaUrl}
		
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


export const loginThunkCreator = (email, password, rememberMe, captcha) => {
	return async (dispatch) => {
		let response = await authAPI.login(email, password, rememberMe, captcha)
		if(response.data.resultCode === 0) {
			dispatch( getUserDataThunkCreator() )
		} else {
			if(response.data.resultCode === 10) {
				dispatch( getCaptchaURLThunkCreator() )
			}
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



export const getCaptchaURLThunkCreator = () => {
	return async (dispatch) => {
		let response = await securityAPI.getCaptchaUrl()
		let captchaUrl = response.data.url
		dispatch( getCaptchaUrlAC(captchaUrl) )
	}
}



export default authReducer;