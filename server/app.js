'use strict';

const passport = require('passport');

require('dotenv').config();

const express = require('express'),
      app  = express(),
      cookieParser = require('cookie-parser'),
      mongoose = require('mongoose'),
    //   passport = require('passport'),
      LocalStrategy = require('passport-local'),
      session = require('express-session');


// TODO: require routes


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//passport config
app.use(require('express-session')({
    secret: 'Koala Koders',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    // res.locals.error = req.flash('error');
    // res.locals.success = req.flash('success');
    next();
});

//TODO: mount routes

//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('adflald ');
    err.status = 404;
    next(err);
});

//error handler
app.use((err, req, res, next) => {
    //set locals, only providing error in dev
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.send(err.message);
});


module.exports = app;

