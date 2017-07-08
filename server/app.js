var app = require('express')()
var http = require('http').Server(app)

var io = require('socket.io')(http)

var Todo = require('./app/todo/todo.model.js')

app.get('/', function (req, res) {
	res.sendfile('index.html')
})

// Import sockets.

require('././app/todo/todo.sockets')(io)

http.listen(3000, function () {
	console.log('listening on *:3000')
})