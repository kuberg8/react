import React from 'react';
import lc from './messages.module.css';
import {Field, reduxForm} from 'redux-form'




function Sms(props) {
	return (
		<div>
			<span className={lc.sms}>{props.message}</span>	
		</div>
	)
}




function MessageForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field autocomplete="off" placeholder="Напишите сообщение..." name={"messageText"} component={"input"} />
			<button>Send</button>
		</form>
	)
}



const MessageReduxForm = reduxForm({
	form: 'message'
})(MessageForm)





function Messages(props) {

	let messagesElements = props.messagesData.map( (m) => {
		return (<Sms message={m.message} key={m.id} />)
	})




	function onSendSms(values) {
		props.sendSms(values.messageText)
	};
	
 
	return (
		<div className={lc.messages}>
			{messagesElements}
			<div className={lc.input_block}>
				<MessageReduxForm onSubmit={onSendSms} />
			</div>
		</div>
	)
}


export default Messages;