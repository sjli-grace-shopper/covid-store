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
        args: 50,
        msg: 'Review text must be atleast 50 characters in length'
      }
    }
  }
})

module.exports = Review
