import React, {PureComponent} from 'react';

import Profile from './Profile.js'
import * as axios from 'axios'




class ProfileAPIComponent extends PureComponent {



	componentDidMount() {
		let userId = this.props.match.params.userId
		if(!userId) {
			userId = this.props.AuthUserId
		}
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}


	render() {
		console.log("render")
	  return (
	    <Profile {...this.props} /*передает все пропсы разом*/ />
	  )
	}
}

export default ProfileAPIComponent