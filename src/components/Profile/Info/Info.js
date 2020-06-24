import React, {useState} from 'react';
import inf from './Info.module.css';
import {Field, reduxForm} from 'redux-form'

import preloader from '../../../assets/img/preloader.svg'
import ProfileStatus from './status/statusWithHooks.js'




const ProfileForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={inf.ProfileFormData}>
			<div>
				<b>Full Name:</b> <Field placeholder="Full Name" autocomplete="off" name="fullName" component="input" type="text" />
			</div>

			<div className={inf.about}>
				<b>Обо мне:</b> <Field placeholder="Обо мне" autocomplete="off" name="aboutMe" component="input" type="text" />
			</div>

			<div>
				<b>Instagram:</b> <Field placeholder="Instagram" autocomplete="off" name="contacts.instagram" component="input" type="text" />
			</div>

			<div>
				<b>YouTube:</b> <Field placeholder="YouTube" autocomplete="off" name="contacts.youtube" component="input" type="text" />
			</div>

			<div>
				<b>Description:</b> <Field placeholder="Descriptione" autocomplete="off" name="lookingForAJobDescription" component="input" type="text" />
			</div>

			<div>
				<b>Looking for a job:</b> <Field name="lookingForAJob" component="input" type="checkbox" />
			</div>

			<button className={inf.save}>Save</button>

			{props.error ?
				<div className={inf.error}>
					{props.error}
				</div>
				: <span></span>}
		</form>
	)
}


const ProfileReduxForm = reduxForm({
	form: 'profile'
})(ProfileForm)







function Info(props) {

	let [editMode, setEditMode] = useState(false)


	if(!props.profile) {
		return (
			<div className={inf.info}>
				<img className={inf.preloader} src={preloader} />
			</div>
		)

	} 


	const onSubmit = (formData) => {
		props.saveInfo(formData)
		setEditMode(false)
	}	

	return (
		<div className={inf.info}>

			<div className={inf.name}>
				<b>{props.profile.fullName}</b>
			</div>

			<ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
			
			<div className={inf.info_item}>
				<div className={inf.about}>
					<b>Обо мне:</b> {props.profile.aboutMe ? props.profile.aboutMe : "---"}
				</div>

				<div>
					<b>Instagram:</b> {props.profile.contacts.instagram ? props.profile.contacts.instagram : "---"}
				</div>

				<div>
					<b>YouTube:</b> {props.profile.contacts.youtube ? props.profile.contacts.youtube : "---"}
				</div>

				<div>
					<b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}
				</div>

				{props.profile.lookingForAJob ?
					<div className={inf.about}>
						<b>My professional skills:</b> {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "---"}
					</div>	
					:
					null			
				}

				{props.isOwner ? <button className={inf.edit} onClick={ () => {setEditMode(true)}}>Edit</button> : null}
				
			</div>

			{editMode ? <ProfileReduxForm initialValues={props.profile} onSubmit={onSubmit} setEditMode={setEditMode} /> : null}

		</div>
	)
}





export default Info;