const router = require('express').Router();
const passport = require('passport');

//Auth Login
router.get('/login', (req, res)=>{
    res.render('login.ejs');
});

//Auth logout
router.get('/logout', (req, res)=>{
    //handle with passport
    res.send('logging out');
});

//Auth eith google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send('you reached call back URI');
});

module.exports=router;
