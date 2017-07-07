import {
	FETCH_TODOS_REQUEST,
	FETCH_TODOS_SUCCESS,
	FETCH_TODOS_FAILURE,

	ADD_TODO_REQUEST,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAILURE,

	FETCH_TODO_REQUEST,
	FETCH_TODO_SUCCESS,
	FETCH_TODO_FAILURE,

	EDIT_TODO_REQUEST,
	EDIT_TODO_SUCCESS,
	EDIT_TODO_FAILURE,

	DELETE_TODO_REQUEST,
	DELETE_TODO_SUCCESS,
	DELETE_TODO_FAILURE
} from './types'

import io from 'socket.io-client'

let socket = io('http://localhost:3000')

// socket.on('messageSuccess', function(data) {
// 	console.log(data.message)
// })

export function fetchTodos() {
	return (dispatch) => {
		dispatch({ type: FETCH_TODOS_REQUEST })

		socket.on('todos_list', (data) => {
			// console.log(data.todos)
			if(data.error) {
				dispatch({ type: FETCH_TODOS_FAILURE, payload: data.error })
			} else {
				dispatch({ type: FETCH_TODOS_SUCCESS, payload: data.todos })
			}
		})
	}
}


export function fetchTodo(idTodo) {
	return (dispatch) => {
		dispatch({ type: FETCH_TODO_REQUEST })

		socket.emit('show_todo', { id_todo: idTodo }) // Envia.
		
		socket.on('show_todo', (data) => { // Escucha.
			if(data.error) {
				dispatch({ type: FETCH_TODO_FAILURE, payload: data.error })
			} else {
				dispatch({ type: FETCH_TODO_SUCCESS, payload: data })
			}
		})
	}
}

export function addTodo(dataForm) {
	return (dispatch) => {

	}
}

export function editTodo(dataForm) {
	return (dispatch) => {

	} 
}

export function deleteTodo(idTodo) {
	return (dispatch) => {

	} 
}
