const Sequelize = require('sequelize')
const db = require('../db')
const Review = db.define('review', {
  rating: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  },
  reviewText: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: 5,
        msg: 'Review text must be at least 5 characters in length'
      }
    }
  }
})

module.exports = Review
