const bcrypt = require('bcrypt')
const pool = require('../database/index')


const getUser = async (req, res) => {
  const users = await pool.query('SELECT * FROM users')
  res.status(200).json(users.rows) 
}


const createUser = async (req, res) => {
  try {
    const { firstname, lasname, email, age, country } = req.body
    const password = await bcrypt.hash(req.body.password, 10)
    console.log(password);
    const user = await pool.query(
      'INSERT INTO users (firstname, lasname, email, password, age, country) VALUES ($1, $2, $3, $4, $5, $6)',[firstname, lasname, email, password, age, country])
    res.json({
      message: 'User Create',
      body: {
        user: {email}
      }
    }).status(201)
  } catch (error) {
    console.log(error)
    res.json(`Error ${error.detail}`)
  }

}

module.exports = {
  getUser,
  createUser
}
