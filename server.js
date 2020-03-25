var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var connectedusers = [];

server.listen(process.env.PORT || 9000, ()=>{
    console.log("Listening at port - 9000");
});

app.use(express.static('build'));

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/build/index.html');
// });

io.on('connection', function (socket) {
    socket.on('userDetails', function (data) {
        if(data) {
            if(data.newChat) {
                data.chatId = socket.id;
            }
            connectedusers.push({...data, _id: socket.id});
            io.emit('users', connectedusers);
        }
    });
    socket.on('chatMessage', (data)=>{
        io.emit('message', {message: data.message, _id: socket.id, chatId: data.chatId, name: data.name});
    })
    socket.on('disconnect', function() {
        connectedusers = connectedusers.filter((users)=>{
            return users._id != socket.id;
        });
        io.emit('users', connectedusers);
    });

});