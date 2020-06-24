const SET_FRIENDS = 'SET-FRIENDS'



let initialState = {
	friendsData : [
	],

	isFetching: false,
	followingProcess: [],
}



function friendsReducer(state = initialState, action) {
	
	if(action.type === SET_FRIENDS) {
		return {
			...state,
			friendsData: [ ...state.friendsData, ...action.friendsData ],
		}
	}

	return state;
}






export function setFriendsAC(friendsData) {
	return {
		type: SET_FRIENDS,
		friendsData,
	}
}


export default friendsReducer;