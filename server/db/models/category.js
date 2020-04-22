const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  imageUrl: Sequelize.STRING
})

module.exports = Category
