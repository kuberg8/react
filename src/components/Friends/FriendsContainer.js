import React from 'react';

import Friends from './Friends.js'
import {setFriendsAC} from '../../redux/friends-reducer'
import {getUsersSuperSelector} from '../../redux/users-selectors.js'


import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js'
import {compose} from 'redux'


let mapStateToProps = (state) => {
	return {
		friendsData: getUsersSuperSelector(state),
		isAuth: state.auth.isAuth,


	}
}

let mapDispatchToProps = (dispatch) => {
	return {
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