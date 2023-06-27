const express = require('express');
const routes = express.Router();
const passport = require('passport');
const studentController = require('../controller/studentController');

routes.post('/addStudent',passport.authenticate('admin-rule',{failureRedirect : '/student/wrongLogin',failureMessage : 'Admin token invalid'}),studentController.addStudent);
routes.get('/viewStudent',studentController.viewStudent);
routes.get('/deleteStudent/:id',studentController.deleteStudent);
routes.post('/updateStudent/:id',studentController.updateStudent);
routes.post('/studentLogin',studentController.studentLogin);
routes.get('/wrongLogin', async function(req,res){
    return res.status(500).json({message : 'token invalid, Please Enter valid token'});
})

module.exports = routes;
