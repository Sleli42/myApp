var	express = require('express');
var	morgan = require('morgan');
var	port = process.env.PORT || 2121;
var app = express();

var multer = require('multer');
var storage = multer.diskStorage(
{
	destination: function(req, file, callback) {
		callback(null, './uploads/testApi');
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now());
		// fieldname - Field name specified in the form
	}
});
var upload = multer({ storage: storage }).single('fileName');

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
require('./uploads/js/routes.js')(app);

app.post('/api/photo', function(req, res) {
	upload(req, res, function(err) {
		if (err) {
			console.log("Error uploading file.");å
			// return res.end("Error uploading file.");
		}
		console.log("File is uploaded.");
		// res.end("File is uploaded.")
	})
})

app.listen(port, function() {
	console.log('Server running on port: ' + port);
})