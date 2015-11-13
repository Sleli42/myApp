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

	//==== PROFIL SESSION
	app.get('/profile', IsLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user: req.user
		});
	});

	//==== LOG OUT
	app.get('logout', function(req, res) {
		res.logout();
		res.redirect('/');
	});
};

function IsLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}