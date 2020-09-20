const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

//const findOrCreate = require('mongoose-findorcreate');

const Account = new Schema({
    username: String,
    password: String,
    email: String
});

Account.plugin(passportLocalMongoose);
//Account.plugin(findOrCreate);

module.exports = new mongoose.model('Account', Account);
