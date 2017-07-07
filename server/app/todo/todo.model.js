var connection = require('../../config/connection')

exports.crear = function(data, callback) {

	return connection.query('INSERT INTO todos SET ?', data, callback)

	connection.end()
}

exports.listar = function(callback) {

	return connection.query('SELECT * FROM todos', callback)

	connection.end()
}

exports.mostrar = function(idTodo, callback) {
	
	return connection.query('select * from todos where id_todo = ?', [idTodo], callback)

	connection.end()
}

exports.eliminar = function(idTodo, callback) {

	return connection.query('DELETE FROM todos WHERE id_todo = ?', [idTodo], callback)

	connection.end()
}

exports.actualizar = function(datos, callback) {

	return connection.query('UPDATE todos SET isDone=?, text=? WHERE id_todo = ?', [datos.isDone, datos.text, datos.id_todo], callback)

	connection.end()
}