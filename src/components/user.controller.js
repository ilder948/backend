const bcrypt = require('bcrypt')
const User = require('../database/index')



const getUser = (req, res) => {
  const users = User.findAll()
  console.log(users);
  res.status(200).json(users)
}


const createUser = (req, res) => {
  try {
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      age: req.body.age
    }).then(user => {
      res.json(user);
    });
  } catch (error) {
    res.json(error);
  }
}



// const createUser = async (req, res) => {
//   try {
//     const { firstname, lastname, email, age, country } = req.body
//     const password = await bcrypt.hash(req.body.password, 10)
//     console.log(password);
//     const user = await User.create({
//       firstname: firstname,
//       lastname: lastname,
//       email: email,
//       age: age,
//       country: country
//     })
//     res.json({
//       message: 'User Create',
//       body: user
//     }).status(201)
//   } catch (error) {
//     console.log(error)
//     res.json(`Error ${error.detail}`)
//   }

// }

module.exports = {
  getUser,
  createUser
}
