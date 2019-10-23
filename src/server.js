const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', socket => {
	const { user } = socket.handshake.query
	console.log(user, socket.id)
	connectedUsers[user] = socket.id
})

mongoose.connect('mongodb+srv://gitfriendly:t0v9f4r2@tindev-rdfpr.mongodb.net/test?retryWrites=true&w=majority', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
})

app.use((req, res, next) => {
	req.io = io
	req.connectedUsers = connectedUsers
	return next()
})

app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3333)
