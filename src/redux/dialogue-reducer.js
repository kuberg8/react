const SEND_SMS = 'SEND-SMS'




let initialState = {
	dialoguesData: [
		{id:1, name: "Alex"},
		{id:2, name: "Dima"},
		{id:3, name: "Nicita"},
		{id:4, name: "Alex"},
		{id:5, name: "Dima"},
		{id:6, name: "Nicita"},
		{id:7, name: "Bob"},
	],

	messagesData: [
		{id:1, message: "hi"},
	],
}



function dialogueReducer(state = initialState, action) {


	if(action.type === SEND_SMS) {
		let newSms = {
		id: 2,
		message: action.smsText,

		};
		
		return {
			...state,
			messagesData: [...state.messagesData, newSms],
		}

	} 


	return state;
}






export function addSmsActionCreator (text) {
	return {
		type: SEND_SMS,
		smsText: text,
	}
}





export default dialogueReducer;