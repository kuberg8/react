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

  return (
    <div className={av.box_avatar}>
 		<div className={av.avatar}>
 			<img src={props.profile.photos.large ? props.profile.photos.large : avaNull} />
 		</div>
    </div>
  )
}


export default Avatar;