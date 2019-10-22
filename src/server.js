const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()
mongoose.connect('mongodb+srv://gitfriendly:t0v9f4r2@tindev-rdfpr.mongodb.net/test?retryWrites=true&w=majority', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
})

server.use(express.json())
server.use(routes)

server.listen(3333)
