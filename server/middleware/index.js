const User = require('../models/user');

function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
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

	async searchAndFilterProducts(req, res, next){
		
	}
};
