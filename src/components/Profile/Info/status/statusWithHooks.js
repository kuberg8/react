import React, {useState, useEffect} from 'react';
import st from './status.module.css';


function  ProfileStatusWithHooks(props) {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)


	useEffect( () => {
		setStatus(props.status)
	}, [props.status])


	let activateEditMode = () => {
		setEditMode(true)
	}

	let deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={st.status}>
			{editMode 
				?  
				<div className={st.status_editMode}>
					<input 
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
						onChange={onStatusChange} />
				</div>
				: 
				<div 
					className={st.status_item}
					onClick={activateEditMode} >
						{props.status}
				</div>
			}
		</div>
	)		
}

export default ProfileStatusWithHooks;