import React from 'react';
import lc from './dialogue_list.module.css';
import {NavLink} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'





function Dialogue_item(props) {
	return (
		<NavLink to={"/dialogue/" + props.id} activeClassName={lc.active}>
			<div className={lc.dialogue_item}>
				{props.name}
			</div>
		</NavLink>
	)
}



function DialogueForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder="Поиск" name={"dialogueText"} component={"input"} />
		</form>
	)
}

const DialogueReduxForm = reduxForm({
	form: 'dialogue'
})(DialogueForm)





function Dialogue_list(props) {

	let dialogueElements = props.dialoguesData.map( (d) => {
		return (<Dialogue_item name={d.name} key={d.id} id={d.id} />)
	});
	


	return (
		<div className={lc.dialogue_list}>
			<DialogueReduxForm />
			{dialogueElements}
		</div>
	)
}


export default Dialogue_list;