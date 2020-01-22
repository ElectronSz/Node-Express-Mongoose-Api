const passport = require("passport");
const passportJWT = require("passport-jwt")
//const ExtractJWT = passportJWT.ExtractJwt;

//const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy


module.exports = (req, res, next) => {
    passport.authenticate(JWTStrategy, function(err, user, info) {
        if (err) return next(err);

        if (!user) return res.status(401).json({message: "Unauthorized Access - No Token Provided!"});

        req.user = user;

        next();

    })(req, res, next);
};

