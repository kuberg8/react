import React from 'react';

import Friends from './Friends.js'
import {updateNewFriendSeekTextAC, setFriendsAC} from '../../redux/friends-reducer'

import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js'
import {compose} from 'redux'


let mapStateToProps = (state) => {
	return {
		friendsData: state.friends.friendsData,
		newFriendSeekText: state.friends.newFriendSeekText,
		isAuth: state.auth.isAuth,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewFriendSeekText: (text) => { dispatch( updateNewFriendSeekTextAC(text) ) },
		setFriends: (friendsData) => { dispatch( setFriendsAC(friendsData) ) },
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Friends)

/*
let AuthRedirectComponent = withAuthRedirect(Friends)


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default FriendsContainer
*/