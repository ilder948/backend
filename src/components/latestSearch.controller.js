const { latestSearch } = require('../model/latestSearch')
const { Products } = require('../model/products')
const { getProductsDb } = require('../components/search')
const { Op, Sequelize } = require('sequelize')
const { random } = require('../database')
const sequelize = require('../database')

const userProducts = async (user_id, query) => {
  if (user_id) {
    try {
      await latestSearch.create({
        user_id: user_id,
        query: query,
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log('No register en database')
  }

}

const recommendations = async (req, res) => {
  const user_id = req.query.user_id
  try {
    const data = await latestSearch.findAll({
      attributes: ["query"],
      order: [
        ['createdAt', 'DESC']
      ],
      limit: 1,
      where: {
        user_id: user_id
      }
    })
    const result = data[0].query
    try {
      const recommendationsSearch = await Products.findAll({
        where: {
          name: {
            [Op.iRegexp]: result
          }
        },
        order: sequelize.random(),
        limit: 5,
      })
      res.json({
        count: recommendationsSearch.length,
        data: recommendationsSearch
      })
    } catch (error) {
      res.json({
        error: `Error in query: ${error}`
      })
    }
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  userProducts,
  recommendations
}


