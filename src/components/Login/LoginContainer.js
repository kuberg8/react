import React from 'react';

import {loginThunkCreator, logoutThunkCreator} from '../../redux/auth-reducer.js'
import Login from './Login.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password, rememberMe, captcha) => { dispatch( loginThunkCreator(email, password, rememberMe, captcha) ) },
		logout: () => { dispatch( logoutThunkCreator() ) }
	}
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);


export default LoginContainer