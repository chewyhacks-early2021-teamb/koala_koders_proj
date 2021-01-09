const User = require('../models/user');

module.exports = {
	
	asyncErrorHandler: (fn) => 
		(req, res, next) => {
			Promise.resolve(fn(req, res, next))
				.catch(next);
		},
	isLoggedIn: (req, res, next) => {
		//check if user is logged in
		if(req.isAuthenticated()) return next();
		req.session.error = 'Need to login to make a post';
		req.session.redirectTo = req.originalUrl;
		res.redirect('/login');
	},
}
