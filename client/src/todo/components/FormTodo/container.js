import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form'

import {
	addTodo
} from '../../actions'

import FormTodo from './FormTodo'

const validate = (values) => {
	const errors = {}

	if(!values.text) {
		errors.text = 'Tienes que introducir una tearea.'
	}else if (values.text.length < 5) {
   		errors.text = 'Tiene que ser por lo menos 5 characteres.'
	}

	return errors
}

function mapStateToProps(state) {
	return {
		insertTodo: state.todo.insertTodo
	}
}


function mapDispatchToProps(dispatch) {
	return {
		addTodo: (dataForm) => {
			dispatch(addTodo(dataForm))
		}
	}
}

const form = reduxForm({
	form: 'FormTodo',
	validate
})

export default connect(mapStateToProps, mapDispatchToProps)(form(FormTodo))