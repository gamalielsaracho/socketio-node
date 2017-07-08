import React, { Component } from 'react'

import Todo from '../Todo'

import FormTodoContainer from '../FormTodo'

class TodoList extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.fetchTodos()
	}

	shouldComponentUpdate(nextProps) {
		console.log('Anterior:')
		console.log(this.props.todos)

		console.log('Siguiente:')
		console.log(nextProps.todos)

		return nextProps.todos !== this.props.todos
	}

	render() {
		console.log(this.props.todosList)

		const { loading, todos, error } = this.props.todosList

		const changeTodo = this.props.changeTodo
		const deleteTodo = this.props.deleteTodo


		// console.log(this.props.changeTodo)
		// console.log(this.props.deleteTodo)

		if(loading) {
			return <div>
				<h4>Cargando..</h4>
			</div>
		} else {
			return <div>
				<h1>Todo List.</h1>
				<FormTodoContainer/>
				<h4>{ changeTodo.message }</h4>
				<h4>{ deleteTodo.message }</h4>
				{
					todos.map((todo) => {
						return <div key={todo.id_todo}>
							<Todo todo={todo}/>
							<button onClick={
								() => { this.props.editTodo(todo.id_todo) }
							}>Done</button>
							<button onClick={
								() => { this.props.removeTodo(todo.id_todo) }
							}>Delete</button>
							<br/>
						</div>
					})
				}
			</div>
		}
	}
}

export default TodoList