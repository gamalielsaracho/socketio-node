import React, { Component } from 'react'

import { Field, reduxForm, reset } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      { touched && ((error && <span>{error}</span>)) }
    </div>
    <br/>
  </div>
)

class FormTodo extends Component {
	constructor(props) {
		super(props)
		this.sendMyForm = this.sendMyForm.bind(this)
		this.renderLoading = this.renderLoading.bind(this)
		this.renderMessage = this.renderMessage.bind(this)
	}

	sendMyForm(formProps) {
		console.log(formProps)

		this.props.addTodo(formProps)
	}

	renderLoading(loading) {
		if(loading) {
			return <h1>Cargando..</h1>
		} else {
			return <span></span>
		}
	}

	renderMessage(message) {
		if(message) {
			return <div>
				<h3>{ message }</h3>
			</div>
		} else {
			return <span></span>
		}
	}

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props

		const { loading, message } = this.props.insertTodo

		return <div>
			{ this.renderLoading(loading) }
			{ this.renderMessage(message) }

			<form onSubmit={handleSubmit(this.sendMyForm)}>
				<Field name='text' type='text' component={renderField} label='Thing'/>
					
				<button className='#0288d1 light-blue darken-2 btn' type="submit" disabled={submitting}>Send</button>
			</form>
		</div>
	}
}

export default FormTodo