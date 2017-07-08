import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import todosReducer from '../todo/reducer'

const rootReducer = combineReducers({
	form: formReducer,
	todo: todosReducer
})

export default rootReducer