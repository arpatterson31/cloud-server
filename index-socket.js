'use strict';

const PORT = process.env || 3000;

const io = require('socket.io')(PORT);

io.on('connection', socket => {
  socket.on('hello', payload => {
    console.log(payload, 'says heyyy!');
    socket.emit('welcome', `Hey, ${payload}, hey!`);
  });
});