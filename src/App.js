import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderContainer from "./components/Header/HeaderContainer.js"
import Links from "./components/Links/Links.js"
import ProfileContainer from "./components/Profile/ProfileContainer.js"
//import Dialogue from "./components/Dialogue/Dialogue.js" 
import FriendsContainer from "./components/Friends/FriendsContainer.js"
//import UsersContainer from "./components/Users/UsersContainer.js"
import LoginContainer from "./components/Login/LoginContainer.js"
import Music from "./components/Music/Music.js"

import preloader from "./assets/img/preloader.svg"

import {Route} from "react-router-dom"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {initializeAppThunkCreator} from './redux/app-reducer.js'
import {withSuspense} from './hoc/withSuspense.js'

import store from './redux/redux-store.js'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"

const Dialogue = React.lazy( () => import("./components/Dialogue/Dialogue.js"))
const UsersContainer = React.lazy( () => import("./components/Users/UsersContainer.js"))




class App extends React.Component {

	componentDidMount() {
		this.props.initializeAppThunkCreator()
	}	


	render() {
		if (!this.props.initialized) {
			return (
				null
		)}

		return (
			<div>
			  <HeaderContainer />
			  <div className="container">
			    <Links />

			    <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />

			    <Route path="/friends" render={ () => <FriendsContainer />} />
			    
			    <Route path="/dialogue" render={withSuspense(Dialogue)} />

			    <Route path="/music" render={ () => <Music />} />

			    <Route path="/users" render={withSuspense(UsersContainer)} />

			    <Route path="/login" render={ () => <LoginContainer />} />
			  </div>
			</div>
		);
	}
}




let mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}




let AppContainer = compose(
	connect(mapStateToProps, {initializeAppThunkCreator}),
	withRouter
)(App)



let MainApp = (props) => {
	return(
	  	<Provider store={store}>
	  		<BrowserRouter basename={process.env.PUBLIC_URL}>
		    	<AppContainer />
		    </BrowserRouter>
		</Provider>
	)
}

export default MainApp