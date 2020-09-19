const passport = require('passport');
const Account = require('./models/account');
const router = require('express').Router();

router.get('/', function (req, res) {
        res.render('index', { user : req.user });
    });

router.get('/register', function(req, res) {
        res.render('register', { });
    });

router.post('/register', function(req, res, next) {
    Account.register(new Account({username: req.body.username, test:'kaki'}), req.body.password, function(err) {
        if (err) {
            console.log('error while user register!', err);
            return next(err);
        }

        console.log('user registered!');

        res.status(200).send('user registered!');
    });
});


router.get('/login', function(req, res) {
        res.render('login', { user : req.user });
    });

router.post('/login', passport.authenticate('local'), function(req, res) {
        res.send(true);
    });

router.get('/logout', function(req, res) {
        req.logout();
        res.send(false);
    });

router.get('/ping', function(req, res){
        res.send("pong!", 200);
    });


module.exports = router;
