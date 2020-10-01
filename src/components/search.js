const { Products } = require('../model/products')
const { Doto } = require('../model/doto')
const Op = require('sequelize').Op

const getProductsDb = async (req, res) => {
  const query = req.query.query
  try {
    const data = await Doto.findAll({
      order: [
        'price'
      ],
      limit: 100,
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
    res.json({ error: 'Error in query' })
  }

}



module.exports = {
  getProductsDb
}