const bcrypt = require('bcrypt');
const user = require('../model/user');
const { Users } = require('../model/user')



const getUser = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.json({
      status: 200,
      count: users.length,
      body: users
    })
  } catch (e) {
    res.json({
      status: 403,
      error: e.message
    })
  }

}


const createUser = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const user = await Users.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password,
      country: req.body.country,
      age: req.body.age
    }).then(user => {
      res.json(user);
    });
  } catch (error) {
    res.json({
      error: error.errors[0].message,
    });
  }
}



module.exports = {
  getUser,
  createUser
}
