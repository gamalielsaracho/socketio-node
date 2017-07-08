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

		let styles = {
			spaceBtn: {
				marginLeft: '1em'
			}
		}

		if(loading) {
			return <div className='container'>
				<h5>Cargando..</h5>
			</div>
		} else {
			return <div className='container'>
				<h3 className='center'>Todo List.</h3>
				<h5 className='center'>{ changeTodo.message }</h5>
				<h5 className='center'>{ deleteTodo.message }</h5>
				<FormTodoContainer/>
				<div className='row center-lg center-md center-sm center-xs'>
					{
						todos.map((todo) => {
							return <div key={todo.id_todo} className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
								<Todo todo={todo}/>
								<a style={styles.spaceBtn} className="#0288d1 light-blue darken-2 btn" onClick={
									() => { this.props.editTodo(todo.id_todo) }
								}>Done</a>

								<a style={styles.spaceBtn} className="#0288d1 light-blue darken-2 btn" onClick={
									() => { this.props.removeTodo(todo.id_todo) }
								}>Delete</a>

								<br/>
								<br/>
							</div>
						})
					}
				</div>
			</div>
		}
	}
}

export default TodoList