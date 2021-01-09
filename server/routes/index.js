const express = require('express'),
      router = express.Router();
const {getRegister, postRegister, getLogin, postLogin, getLogout,   } = require('../controller');
const { asyncErrorHandler} = require('../middleware')

let async = require("async");
let nodemailer = require("nodemailer");
let crypto = require("crypto");
require('dotenv').config()


//root route
router.get("/", (req, res) =>{
    // res.render("index", {title: "We-Rule - Home"});
    // res.redirect('/login');
    res.send("login page rendered successfully!!!!")
});


/* GET /register */
// router.get('/register', getRegister);

/* POST /register */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login */
router.get('/login', getLogin);

/* POST /login */
router.post('/login', asyncErrorHandler(postLogin));

/* GET /logout */
router.get('/logout', getLogout);








module.exports = router;