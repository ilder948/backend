const { Products } = require('../model/products')
const Op = require('sequelize').Op
const { Sequelize } = require('sequelize')
const { userProducts } = require('./latestSearch.controller')

const getProductsDb = async (req, res) => {
  const query = req.query.query
  const user_id = req.query.user_id
  userProducts(user_id, query)
  if (query.length < 2) {
    res.json({
      error: 'enter more than 2 characters'
    })
  }
  debugger
  try {
    const data = await Products.findAll({
      order: [
        'price'
      ],
      limit: 30,
      where: {
        name: {
          [Op.iRegexp]: query
        }
      }
    })
    res.json({
      count: data.length,
      data: data
    })
  } catch (error) {
    res.json({
      error: 'Error in query'
    })
  }

}
module.exports = {
  getProductsDb
}


