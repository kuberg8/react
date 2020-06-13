import React from 'react';
import lg from './login.module.css';
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../../utils/validators.js'
import {Input} from '../common/FormsControls/FormsControls.js'
import {Redirect} from 'react-router-dom'


let maxLength20 = maxLengthCreator(20)


function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
					placeholder="Email"
					name="email"
					component={Input}
					validate={[required, maxLength20]} />
			</div>
			<div>
				<Field 
					type="password"
					placeholder="Password" 
					name="password" 
					component={Input}
					validate={[required, maxLength20]} />
			</div>
			{props.error ?
				<div className={lg.error}>
					{props.error}
				</div>
				: <span></span>}
			<div>
				<Field 
					type="checkbox" name="rememberMe" component={Input} /> Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>		
	)
}


const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)






function Login(props) {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if(props.isAuth) {
		return	<Redirect to={"/profile"} />
	}

	return (
		<div className={lg.login}>
			<div className={lg.reg}>
				<h2>Login</h2>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

export default Login;