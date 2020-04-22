const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('IN_CART', 'PROCESSING', 'CANCELLED', 'COMPLETED'),
    defaultValue: 'IN_CART',
    allowNull: false
  }
})

module.exports = Order
