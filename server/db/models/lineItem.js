const Sequelize = require('sequelize')
const db = require('../db')

const LineItem = db.define('line_item', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})

module.exports = LineItem
