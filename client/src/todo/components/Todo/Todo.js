import React, { Component } from 'react'

class Todo extends Component {
	render() {
		const { todo } = this.props

		if(todo.isDone) {
			return <strike>{ todo.text }</strike>
		} else {
			return <span>{ todo.text }</span>
		}
	}
}

export default Todo