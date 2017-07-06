var app = require('express')()
var http = require('http').Server(app)

var io = require('socket.io')(http)

app.get('/', function (req, res) {
	res.sendfile('index.html')
})


io.on('connection', function (socket) {
	console.log('A user connected')

	// setTimeout(function () {
	// 	// socket.send('Sent a message 4 seconds after connection!')

	// 	// Emitimos un evento para el cliente. 
	// 	socket.emit('testEvent', { description: 'A custom event named testerEvent!' })
	// }, 4000)

	socket.on('usersList', function (data) {
		console.log(data)
	})

	socket.on('addUsers', function(data) {
		console.log(data)
	})

	socket.on('disconnect', function() {
		console.log('A user diconnected')
	})
})


http.listen(3000, function () {
	console.log('listening on *:3000')
})