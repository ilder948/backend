

const bcrypt = require('bcrypt')
const { Users } = require('../model/users')
const jwt = require('jsonwebtoken');
const passport = require('passport')
const passportJWT = require('passport-jwt');
const { config } = require('../config/index')
const { Op } = require("sequelize");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.jwtToken

const strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  const user = Users.findOne({
    where: {
      id: {
        [Op.eq]: jwt_payload.id
      }
    }

  });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

const Login = async function (req, res) {
  const { email, password } = req.body;
  if (email && password) {
    const user = await Users.findOne({
      where: {
        email: {
          [Op.eq]: email
        }
      }
    });
    if (!user) {
      res.status(401).json({ message: 'No such user found' });
      return
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const payload = { id: user.id };
      const token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ status: 200, token: token });
      return
    } else {
      res.json('User or password incorrect')
    }
  }
};

const Register = async (req, res) => {
  try {
    if (!req.body.password || !req.body.email) {
      res.json({ error: 'Email and password is requerid' })
    } else {
      const password = await bcrypt.hash(req.body.password, 10)
      const user = await Users.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: password,
//        country_id: req.body.country,
//        age: req.body.age
      }).then(user => {
        res.json({ message: 'User successfully registered' });
      });
    }
  } catch (error) {
    res.json({
      error: error.errors[0].message,
    });
  }
}


module.exports = { Login, Register }
