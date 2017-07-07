import React, { Component } from 'react'

import Todo from '../Todo'

class TodoList extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.fetchTodos()
	}

	render() {
		console.log(this.props.todosList)

		const { loading, todos, error } = this.props.todosList

		if(loading) {
			return <div>
				<h4>Cargando..</h4>
			</div>
		} else {
			return <div>
				<h1>Todo List.</h1>
				{
					todos.map((todo) => {
						return <div key={todo.id_todo}>
							<Todo todo={todo}/>
							<br/>
						</div>
					})
				}
			</div>
		}
	}
}

export default TodoList