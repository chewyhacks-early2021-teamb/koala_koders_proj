const User  = require("../models/user");
const passport = require("passport");

module.exports = {
	
	//GET /register
	getRegister(req, res, next) {
		res.render('index', {title: 'Register', username: '', firstName: '', lastName: ' '});	
	},
	
	// POST /register
	async postRegister(req, res, next) {	
		try {
			const user = await User.register(new User(req.body), req.body.password);
			req.login(user, function(err){
				if (err){
					return next(err);
				}
                req.session.success = `Welcome , ${user.fullName}!`;
                console.log(`Welcome , ${user.fullName}!`);
				res.redirect('/');
		});
		}catch(err){
			const { username } = req.body;
			let error = err.message
			if(error.includes('duplicate') && error.includes('index: username_1 dup key')){
				error = 'A user with the given email is already registered'
			}
			res.render('index', {title: 'Login/Sign Up', username, error});
		}
	},
	
	//GET /login 
	getLogin(req, res, next) {
		if(req.isAuthenticated()) return res.redirect('/posts');
		if(req.query.returnTo) req.session.redirectTo = req.headers.referer;
		res.render("index", {title: "Login/Sign Up"});
	},
	
	// POST /login
	async postLogin(req, res, next){
		const { username, password } = req.body;
		const { user, error } = await User.authenticate()(username, password);
		if(!user && error) return next(error);
		req.login(user, function(err){
            if(err) return next(err);
            console.log(`Welcome , ${user.fullName}!`);
			req.session.success = `Welcome ${user.fullName}!`;
			const redirectUrl = req.session.redirectTo || '/';
			delete req.session.redirectTo;
			res.redirect(redirectUrl);
		});	
    },
	
	
	// GET /logout
	getLogout(req, res, next) {
			req.logout();
			res.redirect('/');	
	}
	
}