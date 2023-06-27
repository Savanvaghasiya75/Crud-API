const express = require('express');
const port = 9090;
const server = express();
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passport_local = require('passport-local');
const cookie_parser = require('cookie-parser');

const adminStrategy = require('./config/passport-jwt-strategy');
const studentStrategy = require('./config/student-jwt-strategy');


server.use(cookie_parser());

server.use(session({
    name : 'savan',
    secret : '234',
    saveUninitalized : false,
    resave : false,
    cookie : {
        maxAge : 100*60*100
    }
}));





server.use(express.urlencoded());
server.use('/',require('./routes/index'));

server.listen(port,function(err){
    if(err){
        console.log('server is not started');
        return false;
    }
    console.log('server is starting on port :',port);
})