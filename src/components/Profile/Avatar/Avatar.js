import React from 'react';
import av from './avatar.module.css';

import preloader from '../../../assets/img/preloader.svg'
import avaNull from '../../../assets/img/ava.png'


function Avatar(props) {

	if(!props.profile) {
		return (
			<div className={av.box_avatar}>
				<div className={av.avatar}>
					<img src={preloader} />
				</div>
            </div>
		)
	} 


	let pushAvatar = (e) => {
		if(e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}

  return (
  	<div>
	    <div className={av.box_avatar}>
	 		<div className={av.avatar}>
	 			<img src={props.profile.photos.large ? props.profile.photos.large : avaNull} />
	 		</div>
	    </div>
  		<div>
 			{props.isOwner ? <input type="file" onChange={pushAvatar} /> : null}
 		</div>   	
    </div>
  )
}


export default Avatar;