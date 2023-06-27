const passport = require('passport');

const JWTstrategy = require('passport-jwt').Strategy;
const JWTExtract = require('passport-jwt').ExtractJwt;

const otp = {
    jwtFromRequest : JWTExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'admin'
}

const admin = require('../model/admin');

passport.use('admin-rule',new JWTstrategy(otp, async function(userData,done){
    let adminData = await admin.findById(userData.adminnData._id);
    if(adminData){
        return done(null,adminData);
    }
    else{
        return done(null,false);
    }
}));

passport.serializeUser(function(user,done){
    return done(null,user.id);
})

passport.deserializeUser(async function(id,done){
    let adminData = await admin.findById(id);
    if(adminData){
        return done(null,adminData);
    }
    else{
        return done(null,false);                                                
    }
});


module.exports = passport;