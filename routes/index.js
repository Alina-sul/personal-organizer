const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
app.use(express.static(__dirname + '/'));
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.use(cors());
app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

const passport = require('passport');

const mongoose = require('mongoose');
const mongoDB = 'mongodb://0.0.0.0/po_users';
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect(mongoDB, { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.error.bind(console, 'MongoDB connected:'));
db.on('open', console.error.bind(console, 'MongoDB open:'));

const User = new Schema({
  username: String,
  password: String
});

User.plugin(passportLocalMongoose);
const Users = mongoose.model('userInfo', User, 'userInfo');


app.use(passport.initialize());
app.use(passport.session());
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('test');
});

/* ROUTES */

const connectEnsureLogin = require('connect-ensure-login');

app.post('/login', (req, res, next) => {
  passport.authenticate('local',
      (err, user, info) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res.redirect('/login?info=' + info);
        }

        req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }

          return res.redirect('/');
        });

      })(req, res, next);
});

// app.get('/login',
//     (req, res) => res.sendFile('html/login.html',
//         { root: __dirname })
// );

// app.get('/',
//     connectEnsureLogin.ensureLoggedIn(),
//     (req, res) => res.sendFile('html/index.html', {root: __dirname})
// );

// app.get('/private',
//     connectEnsureLogin.ensureLoggedIn(),
//     (req, res) => res.sendFile('html/private.html', {root: __dirname})
// );

app.get('/user',
    connectEnsureLogin.ensureLoggedIn(),
    (req, res) => res.send({user: req.user})
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port ' + port));

module.exports = router;
