import {applyMiddleware, combineReducers, createStore, compose} from "redux";

import profileReducer from './profile-reducer.js'
import friendsReducer from './friends-reducer.js'
import dialogueReducer from './dialogue-reducer.js'
import usersReducer from './users-reducer.js'
import authReducer from './auth-reducer.js'
import appReducer from './app-reducer.js'

import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
	profile: profileReducer,
	friends: friendsReducer,
	dialogue: dialogueReducer,
	users: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


//let store = createStore(reducers, applyMiddleware(thunkMiddleware));   - как было до использования хрумовского Redux DevTools
//window.store = store;  - не нужен так как можно посмотреть данные State в Redux DevTools

export default store;