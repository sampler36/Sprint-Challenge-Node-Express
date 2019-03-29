const express = require('express');
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

const server = express();

server.use(express.json());

server.use('/actions', actionRouter);
server.use('/projects', projectRouter);

server.get('/', (req, res) => {
  res.send('Lets get this Sprint sprinting')
});


module.exports = server;