import React from 'react';

import userPhoto from '../../assets/img/ava.png'

import {usersAPI} from '../../api/api.js'
import * as axios from 'axios'


import Users from './Users.js'




class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}





	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}


	render() {
		console.log("render")
		return (
			<Users
				usersData={this.props.usersData}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				isFetching={this.props.isFetching}
				

				followThunk={this.props.followThunk}
				unfollowThunk={this.props.unfollowThunk}


				followingProcess={this.props.followingProcess} />				
		)
	}
}


export default UsersAPIComponent;