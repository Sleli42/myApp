var	express = require('express');
var	morgan = require('morgan');
var	port = process.env.PORT || 2121;
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

var session = require('express-session');
//==== CONFIG DB
//var configDB = require('./uploads/database.js');
//mongoose.connect(configDB.url);

mongoose.connect('mongodb://127.0.0.1:27017/db', function(err) {
  if (err)
  	console.log(err);
});

/*
//==== SOCKET.IO
var server = require('http').createServer(app);
var io = require('socket.io')(server);
*/
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));

app.use(morgan('dev'));
app.use(cookieParser());

//==== require for passport
app.use(session({ secret: 'grosgrossecret',
				resave: true, 
				saveUninitialized: true })); //secret session
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//==== routes
require('./uploads/routes.js')(app, passport);

app.listen(port, function() {
	console.log('Server running on port: ' + port);
})
/*
// SOCKET.IO - client connect
io.on('connection', function(client) {
	//console.log('Client connected . . .');
	client.on('join', function(data) {
		console.log(data);
		//client.emit('message', "Hello from server");
	});
});
*/