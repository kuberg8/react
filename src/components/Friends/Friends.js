import React from 'react';
import fr from './friends.module.css';

import userPhoto from '../../assets/img/ava.png'

import * as axios from 'axios'
import {NavLink} from 'react-router-dom';



function Friends_item(props) {
	return (
		<div className={fr.friends_item}>
			<NavLink to={'/profile/' + props.id}>
				<img src={props.photo} className={fr.ava} />
			</NavLink>
			{props.name}
			<div className={fr.status}>
				"{props.status}"
			</div>
			<div className={fr.location}>
				{props.location}
			</div>
		</div>
	)
}


function Friends(props) {

	if(props.friendsData.length === 0) {

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setFriends(response.data.items) 			
		})		
	}


	let friendElements = props.friendsData.map( (f) => {
		return (<Friends_item 
			name={f.name} 
			key={f.id}
			id={f.id}
			status={f.status} 
			location={f.location}
			photo={f.photos.small != null ? f.photos.small : userPhoto}
			followed={f.followed}
			if={f.id} />)
	});




	return (
		<div className={fr.friends}>
			{friendElements}
		</div>
	)
}


export default Friends;