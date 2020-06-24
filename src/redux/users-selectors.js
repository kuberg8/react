import {createSelector} from "reselect"



export function getUsers(state) {
	return state.users.usersData
}


/* тема сложные селекторы с библиотекой reselect
export function getUsersSuper(state)  {
	return getUsers(state).filter(u => u.usersData.followed === true)
}

*/
export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (usersData, isFetching) => {
	return usersData.filter(u => u.followed === true)
}) 




export function getPageSize(state) {
	return state.users.pageSize
}


export function getTotalUsersCount(state) {
	return state.users.totalUsersCount
}


export function getCurrentPage(state) {
	return state.users.currentPage
}

export function getIsFetching(state) {
	return state.users.isFetching
}


export function getFollowingProcess(state) {
	return state.users.followingProcess
}





