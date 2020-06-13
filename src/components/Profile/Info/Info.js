import React from 'react';
import inf from './Info.module.css';

import preloader from '../../../assets/img/preloader.svg'
import ProfileStatus from './status/statusWithHooks.js'

function Info(props) {

	if(!props.profile) {
		return (
			<div className={inf.info}>
				<img className={inf.preloader} src={preloader} />
			</div>
		)

	} 
	
	return (
		<div className={inf.info}>
			<div className={inf.name}><b>{props.profile.fullName}</b></div>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			<div className={inf.info_item}><b>Обо мне:</b> {props.profile.aboutMe ? props.profile.aboutMe : "---"}</div>
			<div><b>Instagram:</b> {props.profile.contacts.instagram ? props.profile.contacts.instagram : "---"}</div>
			<div><b>YouTube:</b> {props.profile.contacts.youtube ? props.profile.contacts.youtube : "---"}</div>
		</div>
	)
}

export default Info;