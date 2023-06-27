const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    admin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'admin',
        require : true
    },
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

const student = mongoose.model('student',studentSchema);
module.exports = student;