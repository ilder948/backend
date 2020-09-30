const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../model/user');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const { config } = require('../config/index')
const { Op } = require("sequelize");

passport.use('local-auth', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async function (email, password, cb) {
    return Users.findOne({
      where: {
        email: {
          [Op.eq]: email
        }
      }
    }).then(user => {
      if (user) {
        bcrypt.compare(password, user.password).then(result => {
          if (result) {
            return cb(null, user.toJSON(), { message: 'Logged In Successfully' });
          } else
            return cb(null, false, { message: 'Incorrect email or password.' });
        });
      } else {
        return cb(null, false, { message: 'Incorrect email or password.' });
      }
    }).catch(err => cb(err));
  }
));



passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtToken
},
  function (jwtPayload, cb) {
    return Users.findOne({
      where: {
        id: {
          [Op.eq]: jwtPayload._id
        }
      }
    }).then(user => {
      user.alfToken = jwtPayload.alfToken;
      return cb(null, user);
    })
      .catch(err => {
        return cb(err);
      });
  }
));
module.export = passport;