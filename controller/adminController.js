const path = require('path');
const admin = require('../model/admin'); 
const fs = require('fs');
const jwt = require('jsonwebtoken')



module.exports.addAdmin = async function(req,res){

    let addAdmin = await admin.create(req.body);
    if(addAdmin){
        console.log(addAdmin);
        return res.status(200).json({message : 'admin inserted'});
    }else{
        console.log('admin is not inserted');
        return res.status(500).json({message : 'admin not inserted'});
    }
}


module.exports.adminLogin = async function(req,res){
    let adminData = await admin.findOne({email : req.body.email});
    if(adminData){
        if(adminData.password == req.body.password){
            let token = jwt.sign({adminnData : adminData},'admin',{expiresIn : '1h'});
            return res.json({'status' : 200,'msg' : 'admin Login successfully','data' : token});
        }
        else{
            return res.status(500).json({message : 'email or password wrong'});
        }
    }
}

module.exports.viewAdmin = async function(req,res){
    let viewAdmin = await admin.find({});
    if(viewAdmin){
        console.log(viewAdmin);
        return res.status(200).json({message : viewAdmin});
    }else{
        return res.status(500).json({message : 'admin not viewed'});
    }
}

module.exports.deleteAdmin = async function(req,res){

  
    let deleteAdmin = await admin.findByIdAndDelete(req.params.id);
    if(deleteAdmin){
        return res.status(200).json({message : 'admin is deleted'});
    }else{
        return res.status(500).json({message : 'admin is not deleted'});
    }
}


module.exports.updateAdmin = async function(req,res){
    let updateAdminn = await admin.findByIdAndUpdate(req.params.id,{
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender
    });
    if(updateAdminn){
        return res.status(200).json({message : updateAdminn})
    }
    else{
        return res.status(500).json({message :'admin not updated'})

    }
}