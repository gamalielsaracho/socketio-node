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
} from '../actions/types'

const INITIAL_STATE = {
	todosList: { todos: [], loading: false, error: '' }
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_TODOS_REQUEST:
			return Object.assign({}, state, {
				todosList: { loading: true }
			})

		case FETCH_TODOS_SUCCESS:
			return Object.assign({}, state, {
				todosList: { loading: false, todos: action.payload }
			})

		case FETCH_TODOS_FAILURE:
			return Object.assign({}, state, {
				todosList: { loading: false, todos:[], error: action.payload }
			})

		default:
			return state
	}
}