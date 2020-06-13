import React from 'react';
import us from './users.module.css';

import userPhoto from '../../assets/img/ava.png'
import Preloader from '../common/preloader/Preloader.js'
import Paginator from '../common/paginator/Paginator.js'

import * as axios from 'axios'
import {NavLink} from 'react-router-dom';




function Users(props) {
	return (
		<div className={us.users}>
			{props.usersData.map( (u) => {
				return (
					<div className={us.users_item}>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={us.ava} />
						</NavLink>

						{u.name}

						{u.status
							? 	<div className={us.status}>
									"{u.status}"
								</div>
							:  <span></span>
						}

						<div className={us.location}>
							{u.location}
						</div>
						<div className={us.button}>
							{u.followed ? 
								<button 
									disabled={props.followingProcess.some(id => id === u.id)} 
									onClick={ () => {	props.unfollowThunk(u.id)	} 
								}>Удалить из друзей</button>

								: <button 
									disabled={props.followingProcess.some(id => id === u.id)} 
									onClick={ () => { props.followThunk(u.id) }

								}>Добавить в друзья</button>}
						</div>
					</div>)
			})}


			<Paginator {...props} />

			<Preloader
				isFetching={props.isFetching} />
		
		</div>	
	)	
}


export default Users;