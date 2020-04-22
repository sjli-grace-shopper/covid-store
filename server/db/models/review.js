const Sequelize = require('sequelize')
const db = require('../db')
const Review = db.define('review', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 6
    }
  },
  reviewText: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: 20,
        msg: 'Review text must be at least 20 characters in length'
      }
    }
  }
})

module.exports = Review
