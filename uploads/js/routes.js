module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/log', function(req, res) {
		res.render('log.ejs');
	});

	app.get('/login', function(req, res) {
		res.render('login.ejs');
	});

	app.get('/signup', function(req, res) {
		res.render('signup.ejs');
	});
	
	app.get('logout', function(req, res) {
		res.logout();
		res.redirect('/');
	});
};