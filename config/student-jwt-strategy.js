const passport = require('passport')
const JWTstrategy = require('passport-jwt').Strategy;
const JWTExtract = require('passport-jwt').ExtractJwt;

const otp = {
    jwtFromRequest : JWTExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'student'
}

const student = require('../model/student');

passport.use('student-rule', new JWTstrategy(otp,async function(userData,done){
    let studentData = await student.findById(userData.studentData._id);
    if(studentData){
        return done(null,studentData);
    }else{
        return done(null,false);
    }
}))


passport.serializeUser(function(user,done){
    return done(null,user.id);
});

passport.deserializeUser(async function(id,done){
    let studData = await student.findById(id);
    if(studData){
        return done(null,studData);
    }else{
        return done(null,false);
    }
});

module.exports = passport;