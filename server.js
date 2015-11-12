var	express = require('express');
var	morgan = require('morgan');
var	port = process.env.PORT || 2121;
var app = express();
//==== SOCKET.IO
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));

server.listen(port, function() {
	console.log('Server running on port: ' + port);
})

app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/signup', function(req, res) {
	res.render('signup.ejs');
})

app.get('/login', function(req, res) {
	res.render('login.ejs');
})

// SOCKET.IO - client connect
io.on('connection', function(client) {
	//console.log('Client connected . . .');
	client.on('join', function(data) {
		console.log(data);
		//client.emit('message', "Hello from server");
	});
});