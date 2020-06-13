import {usersAPI} from '../api/api.js'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE-IS-FOLLOWING-PROCRSS'



let initialState = {
	usersData:[	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingProcess: [],
}


function usersReducer(state = initialState, action) {


	if(action.type === FOLLOW) {
		return {
			...state,
			usersData: state.usersData.map( (u) => {
				if(u.id === action.userId) {
					return {...u, followed: true}
				} else {
					return u 
				}
			}),

		}

	} else if(action.type === UNFOLLOW) {
		return {
			...state,
			usersData: state.usersData.map( (u) => {
				if(u.id === action.userId) {
					return {...u, followed: false}
				} else {
					return u 
				}
			}),
		}

	} else if(action.type === SET_USERS) {
		return {
			...state,
			usersData: [ ...action.usersData ],
		}

	} else if(action.type === SET_CURRENT_PAGE) {
		return {
			...state,
			currentPage: action.currentPage,
		}

	}else if(action.type === SET_TOTAL_USERS_COUNT) {
		return {
			...state,
			totalUsersCount: action.totalUsersCount,
		}
	} else if(action.type === TOGGLE_IS_FETCHING) {
		return {
			...state,
			isFetching: action.isFetching
		}
	} else if(action.type === TOGGLE_IS_FOLLOWING_PROCESS) {
		return {
			...state,
			followingProcess:action.isFetching 
			? [...state.followingProcess, action.userId]
			: state.followingProcess.filter(id => id != action.userId)
		}
	}



	return state;
}







function followAC(userId) {
	return {
		type: FOLLOW,
		userId
	}
}

 function unfollowAC(userId) {
	return {
		type: UNFOLLOW,
		userId
	}
}


function setUsersAC(usersData) {
	return {
		type: SET_USERS,
		usersData,
	}
}



function setTotalUsersCountAC(totalCount) {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalUsersCount: totalCount
	}
}

function toggleIsFetchingAC(isFetching) {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}



function toggleFollowingProcessAC(isFetching, userId) {
	return {
		type: TOGGLE_IS_FOLLOWING_PROCESS,
		isFetching,
		userId
	}
}





export function setCurrentPageAC(pageNumber) {
	return {
		type: SET_CURRENT_PAGE,
		currentPage: pageNumber,
	}
}



export const getUsersThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch( toggleIsFetchingAC(true) )

		let data = await usersAPI.getUsers(currentPage, pageSize);

		dispatch( toggleIsFetchingAC(false) )
		dispatch( setUsersAC(data.items) )	
		dispatch( setTotalUsersCountAC(40) )	
	}
}





export const followThunkCreator = (userId) => {
	return async (dispatch) => {
		dispatch( toggleFollowingProcessAC(true, userId) )

		let response = await usersAPI.follow(userId)
			
		if (response.data.resultCode === 0) {
			dispatch( followAC(userId) )
		}	
		dispatch( toggleFollowingProcessAC(false, userId) )
	}
}


export const unfollowThunkCreator = (userId) => {
	return async (dispatch) => {
		dispatch( toggleFollowingProcessAC(true, userId) )

		let response = await usersAPI.unfollow(userId)
			
		if (response.data.resultCode === 0) {
			dispatch( unfollowAC(userId) )
		}	
		dispatch( toggleFollowingProcessAC(false, userId) )
	}
}




export default usersReducer;