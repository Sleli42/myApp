var	express = require('express');
var	morgan = require('morgan');
var	port = process.env.PORT || 2121;
var app = express();
var server = require('http').createServer(app);
//==== SOCKET.IO
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));

app.listen(port, function() {
	console.log('Server running on port: ' + port);
})

app.get('/', function(req, res) {
	res.render('index.ejs');
});
// client connect
io.on('connection', function(client) {
	console.log('Client connected . . .');
	client.on('join', function(data) {
		console.log(data);
	});
});