import React from 'react';
import fr from './friends.module.css';

import userPhoto from '../../assets/img/ava.png'

import * as axios from 'axios'
import {Redirect} from 'react-router-dom'


function Friends_item(props) {
	return (
		<div className={fr.friends_item}>
			<img src={props.photo} className={fr.ava} />
			{props.name}
			<div className={fr.status}>
				"{props.status}"
			</div>
			<div className={fr.location}>
				{props.location}
			</div>
			<div className={fr.button}>
				<button onClick={ () => {} }>Удалить из друзей</button>
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
			status={f.status} 
			location={f.location}
			photo={f.photos.small != null ? f.photos.small : userPhoto} />)
	});


	let newUFriendsElement = React.createRef();


	function onFriendsChange() {
		let text = newUFriendsElement.current.value
		props.updateNewFriendSeekText(text);
	}


	return (
		<div className={fr.friends}>
			<input 
				onChange={onFriendsChange} 
				value={props.newFriendSeekText} 
				placeholder="Поиск"
				ref={newUFriendsElement} />
			{friendElements}
		</div>
	)
}


export default Friends;