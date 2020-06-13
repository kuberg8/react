import React from 'react';
import di from './dialogue.module.css';

import MessagesContainer from './Messages/MessagesContainer.js'
import Dialogue_list_Container from './Dialogue_list/Dialogue_list_Container.js'




function Dialogue(props) {
	return (
		<div className={di.dialogue}>
			<Dialogue_list_Container />
			<MessagesContainer />
		</div>
	)
}


export default Dialogue;