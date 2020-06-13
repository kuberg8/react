import profileReducer, {addPostActionCreator} from './profile-reducer'
import ReactDOM from 'react-dom'
import App from '../App'
import React from 'react'

it('new post should be added', ()=> {
	let action = addPostActionCreator('hoy')
	let state = {
		postsData:[
			{id:1, name: "Alex", likeCounts:"22", text:"Погода хорошая"},
			{id:2, name: "Dima", likeCounts:"10", text:"Погода хорошая"},
			{id:3, name: "Nikita", likeCounts:"0", text:"Погода плохая"},
		],
	} 
	let newState = profileReducer(state, action)

	expect(newState.postsData.length).toBe(4)
})



it('new post should be hoy', ()=> {
	let action = addPostActionCreator('hoy')
	let state = {
		postsData:[
			{id:1, name: "Alex", likeCounts:"22", text:"Погода хорошая"},
			{id:2, name: "Dima", likeCounts:"10", text:"Погода хорошая"},
			{id:3, name: "Nikita", likeCounts:"0", text:"Погода плохая"},
		],
	} 
	let newState = profileReducer(state, action)

	expect(newState.postsData[0].text).toBe('hoy')
})
