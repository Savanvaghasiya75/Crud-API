const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/ManagementAPI');

const db = mongoose.connection;
db.on('error',console.error.bind,(console,'db is not connected'));
db.once('open',function(err){
    if(err){
        console.log('db is not connected');
        return false;
    }
    console.log('db is connected sucessfully');
});

module.exports = db;