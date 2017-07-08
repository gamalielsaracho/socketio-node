import { connect } from 'react-redux'

import {
	fetchTodos,
	editTodo,
	deleteTodo
} from '../../actions'

import TodoList from './TodoList'


function mapStateToProps(state) {
	return {
		todosList: state.todo.todosList,
		todos: state.todo.todosList.todos,
		
		changeTodo: state.todo.changeTodo,
		deleteTodo: state.todo.deleteTodo
	}
}


function mapDispatchToProps(dispatch) {
	return {
		fetchTodos: () => {
			dispatch(fetchTodos())
		},
		editTodo: (idTodo) => {
			dispatch(editTodo(idTodo))
		},
		removeTodo: (idTodo) => {
			dispatch(deleteTodo(idTodo))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
