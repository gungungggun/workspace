// Socket.io
var io = require("socket.io")(3000);
//var redis = require('redis');

//subscriber = redis.createClient(6379, 'localhost')

//subscriber.on("message", function(channel, message) {
//    io.sockets.in(channel).emit("publish", {"message": message});
//});

io.sockets.on("connection", function (socket) {
    console.log('connect')
	socket.on("send", function (req) {
        console.log('send')
        console.log(req.key)
		io.sockets.emit('receive', req);
    });
	// 接続開始
	//socket.on("inroom", function (req) {
    //    room = req.room
    //    //subscriber.subscribe(room);
	//	socket.join(room);
	//});
});
