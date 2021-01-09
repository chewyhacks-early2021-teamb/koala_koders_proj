const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
	    username: { type: String, require: true, index:true, unique:true,sparse:true},
	    password: { type: String, require:true },
	    fullName: String,

});

UserSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", UserSchema);