const mongoose = require('mongoose');
const path = require('path');

const adminSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    }
});

const admin = mongoose.model('admin',adminSchema)
module.exports = admin;