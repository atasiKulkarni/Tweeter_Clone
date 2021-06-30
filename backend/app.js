var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const corsOptions ={
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const tweetsRouter = require('./routes/tweets');
var app = express();
const mongoose =  require("mongoose");

mongoose.connect(
    process.env.MONGO_CONNECTION_URL, 
    {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},function(err)
{
    if(err){
        console.log("Error Occurred", err);
    }
    else
    {
        console.log("Connetion to database is successfull");
    }
}
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tweets', tweetsRouter);

module.exports = app;
