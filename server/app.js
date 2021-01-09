require('dotenv').config();

const express = require('express'),
	  app = express(),
	  engine = require('ejs-mate'),
	  cookieParser = require('cookie-parser'),
	  mongoose = require('mongoose'),
	  passport = require('passport'),
	  LocalStrategy = require('passport-local'),
	  flash 		= require('connect-flash'),
	  User 			= require('./models/user'),
	  session 		= require('express-session'),
	  methodOverride = require('method-override');
// 	  seedPost 	= require('./seeds');
// seedPost();



// require routes
const indexRoutes 	 = require('./routes/index');



// mongoose.connect("mongodb://localhost/werule_db");
// let url = process.env.DATABASEURL || "mongodb://localhost/werule_db";
console.log(process.env.DATABASEURL);
mongoose.connect("mongodb://localhost/koala_db", { 
	useNewUrlParser: true,
	useCreateIndex: true
	
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('connected');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//use ejs-locals for all ejs templates
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: 'Once again Rusty wins cutest dog!',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//custom middleware to handle every route that has currentUser defined
app.use(function(req, res, next){
	// req.user = {
	// 	 "_id" : "5eadee754f106304082ccc83",
	// 	 "username" : "tereflech17@gmail.com"
	// }
   res.locals.currentUser = req.user;
	console.log(req.user);
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});


//mount routes
app.use('/', indexRoutes);

//catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	
// 	//render the error page
	res.status(err.status || 500);
	console.log(err.status);
	res.send('error');
});


 module.exports = app;

