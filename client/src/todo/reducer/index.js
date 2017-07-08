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
	todosList: { todos: [], loading: false, error: '' },
	insertTodo: { message:'' , loading: false, error: '' },
	changeTodo: { message: '', loading: false, error: '' },
	deleteTodo: { message: '', loading: false, error: '' }
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
			// Todos List.
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

			// Create a Todo.
		case ADD_TODO_REQUEST:
			return Object.assign({}, state, {
				insertTodo: { loading: true }
			})

		case ADD_TODO_SUCCESS:
			return Object.assign({}, state, {
				insertTodo: { loading: false, message: action.payload.message },
				changeTodo: { message: '' },
				deleteTodo: { message: '' }
			})

		case ADD_TODO_FAILURE:
			return Object.assign({}, state, {
				insertTodo: { loading: false, message: '', error: action.payload }
			})

			// Update a Todo.
		case EDIT_TODO_REQUEST:
			return Object.assign({}, state, {
				changeTodo: { loading: true }
			})

		case EDIT_TODO_SUCCESS:
			return Object.assign({}, state, {
				changeTodo: { loading: false, message: action.payload.message },
				insertTodo: { message: '' },
				deleteTodo: { message: '' }
			})

		case EDIT_TODO_FAILURE:
			return Object.assign({}, state, {
				changeTodo: { loading: false, message: '', error: action.payload }
			})

			// Delete a Todo 
		case DELETE_TODO_REQUEST:
			return Object.assign({}, state, {
				deleteTodo: { loading: true }
			})

		case DELETE_TODO_SUCCESS:
			return Object.assign({}, state, {
				deleteTodo: { loading: false, message: action.payload.message },
				insertTodo: { message: '' },
				changeTodo: { message: '' }
			})

		case DELETE_TODO_FAILURE:
			return Object.assign({}, state, {
				deleteTodo: { loading: false, message: '', error: action.payload }
			})


		default:
			return state
	}
}