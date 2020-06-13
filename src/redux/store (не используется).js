import profileReducer from './profile-reducer.js'
import dialogueReducer from './dialogue-reducer.js'




let store = {
	_state: {
		profile : {
			postsData:[
				{id:1, name: "Alex", likeCounts:"22", text:"Погода хорошая"},
				{id:2, name: "Dima", likeCounts:"10"},
				{id:3, name: "Nicita", likeCounts:"0"},
			],

			newPostText: "",
		},


		dialogue : {
			dialoguesData: [
				{id:1, name: "Alex"},
				{id:2, name: "Dima"},
				{id:3, name: "Nicita"},
				{id:4, name: "Alex"},
				{id:5, name: "Dima"},
				{id:6, name: "Nicita"},
				{id:7, name: "Bob"},
			],
			newDialogueText: "",

			messagesData: [
				{id:1, message: "hi"},
			],

			newMessagesText: "",
		},




		friends : {
			friendsData : [
				{id:1, name: "Alex"},
				{id:2, name: "Dima"},
				{id:3, name: "Nicita"},
				{id:4, name: "Alex"},
				{id:5, name: "Bob"},
			]
		}
	},



	getState() {
		return this._state;
	},
	subscribe(observer) {
		this.rerenderEntireTree = observer;
	},

	rerenderEntireTree() {},





	dispatch(action) {

		this._state.profile = profileReducer(this._state.profile, action)
		this._state.dialogue = dialogueReducer(this._state.dialogue, action)


		this.rerenderEntireTree(this._state);
	},
}



export default store
