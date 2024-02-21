
// To display data for the browser UI 
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors=require("cors");

app.use(express.static('./frontend/dist'));
app.use(cors());

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A client connected');

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

module.exports={server,io};