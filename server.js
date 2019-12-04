const express = require('express');
const authRoutes = require('./routes/auth.routes');
const passportSetup = require('./config/passport-setup');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

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

//create home route
app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});