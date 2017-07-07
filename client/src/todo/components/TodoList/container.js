import { connect } from 'react-redux'

import {
	fetchTodos
} from '../../actions'

import TodoList from './TodoList'


function mapStateToProps(state) {
	return {
		todosList: state.todo.todosList
	}
}


function mapDispatchToProps(dispatch) {
	return {
		fetchTodos: () => {
			dispatch(fetchTodos())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
