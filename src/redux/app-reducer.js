import {getUserDataThunkCreator} from './auth-reducer.js'


const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'




let initialState = {
	initialized: false
}


function appReducer(state = initialState, action) {


	if(action.type === INITIALIZED_SUCCESS) {
		return {
			...state,
			initialized: true,
		};
	} 

	

	return state;
}





function initializedSuccess() {
	return {
		type: INITIALIZED_SUCCESS,		
	}
}


export const initializeAppThunkCreator = () => {
	return (dispatch) => {
		let promise = dispatch(getUserDataThunkCreator())
		Promise.all([promise])
		.then( () => {
			dispatch(initializedSuccess())
		}) 
		
	}
}



export default appReducer;