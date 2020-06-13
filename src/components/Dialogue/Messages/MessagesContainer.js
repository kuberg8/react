import React from 'react';

import {addSmsActionCreator} from '../../../redux/dialogue-reducer.js'
import Messages from './Messages.js'

import {connect} from 'react-redux'



let mapStateToProps = (state) => {
	return {
		messagesData: state.dialogue.messagesData,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendSms: (text) => { dispatch( addSmsActionCreator(text) ) },
	}
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;