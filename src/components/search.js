const { Products } = require('../model/products')
const { Doto } = require('../model/doto')
const Op = require('sequelize').Op
const { Sequelize } = require('sequelize')

const getProductsDb = async (req, res) => {
  const query = req.query.query

  if (query.length < 3) {
    res.json({
      error: 'enter more than 3 characters'
    })
  }

  try {
    const data = await Doto.findAll({
      order: [
        'price'
      ],
      limit: 30,
      where: {
        name: {
          [Op.substring]: query
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


