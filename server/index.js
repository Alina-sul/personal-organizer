const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const passport = require('passport');
const Account = require('./models/account');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const mongoDB = 'mongodb://0.0.0.0/po_users';
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

app.use(cors());
app.use(bodyParser.json());

// Configure mongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.error.bind(console, 'MongoDB connected:'));
db.on('open', console.error.bind(console, 'MongoDB open:'));
mongoose.set('useCreateIndex', true);

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use account model for authentication
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    test:'test'
}, Account.authenticate()));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Account.findById(id, function(err, user) {
        done(err, user);
    });
});

// Register routes
app.use('/',routes);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log('App listening on port ' + port));

module.exports = app;
