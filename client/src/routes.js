import React from 'react'
import { Route, IndexRoute } from 'react-router'

// App Principal de la aplicación.
import TodoListPage from './todo/pages/TodoListPage'

export default (
	<Route path='/' component={TodoListPage}>
	</Route>)