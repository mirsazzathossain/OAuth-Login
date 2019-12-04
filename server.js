const express = require('express');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const passportSetup = require('./config/passport-setup');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,
    {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log('Connected to mongodb');
    });
  mongoose.connection.on('error', function(err){
    console.log("Could not connect to MongoDB")
  });
  

//set up routes
app.use('/auth',authRoutes);
app.use('/profile', profileRoutes);

//create home route
app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});