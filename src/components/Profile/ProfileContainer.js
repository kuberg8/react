import React from 'react';

import {getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from '../../redux/profile-reducer.js'
import ProfileAPIComponent from './ProfileAPIComponent.js'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js'
import {compose} from 'redux'



let mapStateToProps = (state) => {
    return {
    	profile: state.profile.userProfile,
    	isAuth: state.auth.isAuth,
        status: state.profile.status,
        AuthUserId: state.auth.id
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    	getUserProfile: (userId) => { dispatch(getUserProfileThunkCreator(userId) ) },
        getStatus: (userId) => { dispatch(getStatusThunkCreator(userId) ) },
        updateStatus: (status) => { dispatch(updateStatusThunkCreator(status) ) },
    }
}


/*

let AuthRedirectComponent = withAuthRedirect(ProfileAPIComponent)


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);


export default ProfileContainer;
*/

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect
)(ProfileAPIComponent);