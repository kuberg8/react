const UPDATE_NEW_FRIENDS_SEEK_TEXT = 'UPDATE-NEW-FRIENDS-SEEK-TEXT'
const SET_FRIENDS = 'SET-FRIENDS'



let initialState = {
	friendsData : [
	],

	newFriendSeekText: "",
}



function friendsReducer(state = initialState, action) {
	
	if(action.type === UPDATE_NEW_FRIENDS_SEEK_TEXT) {
		return {
			...state,
			newFriendSeekText: action.newText
		};
	} else if(action.type === SET_FRIENDS) {
		return {
			...state,
			friendsData: [ ...state.friendsData, ...action.friendsData ],
		}
	}

	return state;
}





export function updateNewFriendSeekTextAC (text) {
	return {
		type: UPDATE_NEW_FRIENDS_SEEK_TEXT,
		newText: text,
	}
}


export function setFriendsAC(friendsData) {
	return {
		type: SET_FRIENDS,
		friendsData,
	}
}


export default friendsReducer;