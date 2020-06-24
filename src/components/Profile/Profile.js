import React from 'react';
import cl from './profile.module.css';

import Avatar from './Avatar/Avatar.js'
import MyPostsContainer from './MyPosts/MyPostsContainer.js'
import Info from './Info/Info.js'



function Profile(props) {
  return (
    <div className={cl.Profile}>
    	<div className={cl.col1}>
    		<Avatar profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} />
    	</div>

    	<div className={cl.col2}>
    		<Info 
                profile={props.profile} 
                isOwner={props.isOwner} 
                status={props.status} 
                updateStatus={props.updateStatus}
                saveInfo={props.saveInfo} />
    		<MyPostsContainer isOwner={props.isOwner} />
    	</div>
    </div>
  )
}


export default Profile;