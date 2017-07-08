var app = require('express')()
var http = require('http').Server(app)

var io = require('socket.io')(http)

var Todo = require('./app/todo/todo.model.js')

app.get('/', function (req, res) {
	res.sendfile('index.html')
})

var clients = 0

// var todos = [{ id:1, isDone: false, text: 'React.js ' }]

io.on('connection', function (socket) {
	console.log('A user connected')

	function handleEmitTodosList() {
		Todo.listar(function (err, todos) {
			if(err) {
				console.log(err)

				socket.emit('todos_list', { error: 'Ocurrió un error, intente nuevamente AA.'})
				return
			}

			io.sockets.emit('todos_list', { todos: todos })
		})
	}

	handleEmitTodosList() 

	socket.on('add_todo', function(data) {
		Todo.crear(data, function(err, result) {
			if(err) {
				socket.emit('add_todo', { error: 'Ocurrió un error, intente nuevamente AA.'})
				return
			}
			
			// console.log(result.insertId)

			socket.emit('add_todo', { 
				message: 'Se agregó exitósamente.',
				id_todo: result.insertId
			})
			
			handleEmitTodosList()
		})
	})

	socket.on('show_todo', function(data) {
		Todo.mostrar(data.id_todo, function(err, todo) {
			if(err) {
				socket.emit('show_todo', { error: 'Ocurrió un error, intente nuevamente AA.'})
				return
			}

			// var dataTodo = todo[0]
			// console.log(dataTodo)
			socket.emit('show_todo', todo[0])
		})
	})

	socket.on('edit_todo', function(data) {
		Todo.actualizar(data, function(err) {
			if(err) {
				console.log(err)
				socket.emit('edit_todo', { error: 'Ocurrió un error, intente nuevamente AA.'})
				return
			}

			socket.emit('edit_todo', { message: 'Se actualizó exitósamente.' })
			
			handleEmitTodosList()
		})
	})

	socket.on('delete_todo', function(data) {
		Todo.eliminar(data.id_todo, function(err) {
			if(err) {
				socket.emit('delete_todo', { error: 'Ocurrió un error, intente nuevamente AA.'})
				return
			}

			socket.emit('delete_todo', { message: 'Se Eliminó exitósamente.' })

			handleEmitTodosList()
		})
	})


	socket.on('eventClient', function (data) {
		console.log(data)
	})


	socket.on('todos', function(todo) { // tree lo que tiene el cliente.
		io.emit('todos', todo) // emite al cliente lo que tiene.
	})

	clients++
	// socket.emit('broadcast',{ description: 'Hey, welcome!'});

	// io.sockets.emit('todos', { todos })

	socket.broadcast.emit('broadcast', { description: clients + 'clients connected!' })

	socket.on('disconnect', function() {
		// Si alguien se desconecta.
		clients--
		socket.broadcast.emit('broadcast', { description: clients + 'clients connected!!.' })
		console.log('A user diconnected')
	})
})


http.listen(3000, function () {
	console.log('listening on *:3000')
})