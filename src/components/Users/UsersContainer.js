import React from 'react';

import {setCurrentPageAC, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from '../../redux/users-reducer.js'
import {getUsers, getUsersSuperSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProcess} from '../../redux/users-selectors.js'
import UsersAPIComponent from './UsersAPIComponent.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		usersData: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingProcess: getFollowingProcess(state),
	}
}


let mapDispatchToProps = (dispatch) => {
	return {
		followThunk: (userId) => { dispatch( followThunkCreator(userId) ) },
		unfollowThunk: (userId) => { dispatch( unfollowThunkCreator(userId) ) },

		setCurrentPage: (pageNumber) => { dispatch( setCurrentPageAC(pageNumber) ) },

		getUsers: (currentPage, pageSize) => { dispatch( getUsersThunkCreator(currentPage, pageSize) ) }
	}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);


export default UsersContainer