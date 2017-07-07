var mysql = require('mysql')

var dataBase = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'mercado'
}

module.exports = mysql.createConnection(dataBase, function(err, connection) {
	if(err) {
		console.log('Error connecting '+err.stack)
		return
	}

	connection.connect((err, success) => {
		if(err) {
			console.log('Error connecting '+err.stack)
			return
		}

		return success
	})
})