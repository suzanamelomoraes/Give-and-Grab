const path = require('path')
const express = require('express')

const router = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1', router)


module.exports = server
