import React, {PureComponent} from 'react';

import Profile from './Profile.js'
import * as axios from 'axios'




class ProfileAPIComponent extends PureComponent {

	refreshProfile() {
		let userId = this.props.match.params.userId
		if(!userId) {
			userId = this.props.AuthUserId
		}
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)		
	}


	componentDidMount() {
		this.refreshProfile()
	}


	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile()		
		}

	}


	render() {
		console.log("render")
	  return (
	    <Profile {...this.props} /*передает все пропсы разом*/ isOwner={!this.props.match.params.userId} />
	  )
	}
}

export default ProfileAPIComponent