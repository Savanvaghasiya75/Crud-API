const express = require('express');
const routes = express.Router();
const adminController = require('../controller/adminController');
const studentController = require('../controller/studentController');
const admin = require('../model/admin');
const student = require('../model/student');
const passport = require('passport');
const { route } = require('./student');

routes.post('/',passport.authenticate('admin-rule',{failureRedirect : '/wrongLogin',failureMessage : 'token invalid'}),adminController.addAdmin);
routes.get('/viewAdmin',adminController.viewAdmin);
routes.get('/deleteAdmin/:id',adminController.deleteAdmin);
routes.post('/updateAdmin/:id',adminController.updateAdmin);
routes.post('/adminLogin',adminController.adminLogin);
routes.get('/wrongLogin', async function(req,res){
    return res.status(500).json({message : 'token invalid, Please Enter valid token'});
})


routes.use('/student',require('./student'));






module.exports = routes;