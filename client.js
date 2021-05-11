'use strict';

const io = require('socket.io-client');

// const server = 'http://localhost:3000';

const server = 'http://cloud-server2.eba-gbdtmbqb.us-west-2.elasticbeanstalk.com/'

const socket = io.connect(server);

socket.on('welcome', payload => console.log(payload));

socket.emit('hello', 'Audrey');