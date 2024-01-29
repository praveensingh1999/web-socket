const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use('/', express.static(__dirname + '/public')); // any request comming i am start serving my public folder

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected',socket.id);
    });

    // socket.on('from_client',() => {
    //   console.log("recived event from client");
    // })
    // setInterval(function f()  {
    //   socket.emit('from_server');  
    // }, 3000);

    socket.on('new_msg', (data) => {
        io.emit('msg_rcvd',data);  // io.emit => it send all the socket connections.
        // socket.emit('msg_rcvd', data);  // socket.io => it send to that socket only
        // socket.broadcast.emit('msg_rcvd', data);  //apart from that socket( whose send the message) everyone received the message.

    });
});

server.listen(3000,()=>{
    console.log('listening on :3000');
});


