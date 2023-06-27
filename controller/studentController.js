const student = require('../model/student');
const jwt = require('jsonwebtoken');

module.exports.addStudent = async function(req,res){
    let addStudent = await student.create(req.body);
    if(addStudent){
        return res.status(200).json({message : addStudent})
    }
    return res.status(500).json({message : 'not insert'})
}

module.exports.viewStudent = async function(req,res){
    let viewStudent = await student.find({});
    if(viewStudent){
        return res.status(200).json({message : viewStudent})
    }
    return res.status(500).json({message : 'not viewed'});

}

module.exports.deleteStudent = async function(req,res){
    let deleteStudent = await student.findByIdAndDelete(req.params.id);
    if(deleteStudent){
        return res.status(200).json({message : 'student is deleted'});
    }
    return res.status(500).json({message : 'not deleted'});


}


module.exports.updateStudent = async function(req,res){
    let updateStudent = await student.findByIdAndUpdate(req.params.id,{
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender
    });
    console.log(updateStudent);
    if(updateStudent){
        return res.status(200).json({message : 'Updated Student is :',updateStudent});
    }
    return res.status(500).json({message : 'not deleted'});
}

module.exports.studentLogin = async function(req,res){
    let studentLogin = await student.findOne({email : req.body.email,password : req.body.password});
    if(studentLogin){
        let token = jwt.sign({studentData : studentLogin},'student',{expiresIn : '1h'});
        if(token){
            return res.status(200).json({message : token});
        }
        else{
            return res.status(500).json({message : 'something Wrong'});
        }
    }
    else{
        return res.status(500).json({message : 'email or password is wrong'});
    }
}