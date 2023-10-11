// load dependency named express that implements http
const express = require('express')
// load fs filesystem tools to read files from the hd
const path = require('path')
// 3rd party library to read and write cookies
const cookieParser = require('cookie-parser')

function setupServer(server) {

// middleware to use cookies
server.use(cookieParser());

// middleware to parse urlencoded form data
server.use(express.urlencoded({ extended: true }));

// load plugin for express that parses request body
const bodyParser = require('body-parser')
server.use(bodyParser.json())

// middleware to serve static files from /img route
server.use('/img', express.static(path.join(__dirname, 'img')));
}

module.exports = setupServer