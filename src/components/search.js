const { Products } = require('../model/products')
const Op = require('sequelize').Op

const getProductsDb = async (req, res) => {
  const query = req.query.query

  const data = await Products.findAll({
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
}

module.exports = {
  getProductsDb
}