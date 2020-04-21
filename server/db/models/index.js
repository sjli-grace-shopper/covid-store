const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Order = require('./order')
const LineItem = require('./lineItem')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// define one to many association between reviews and products
Review.belongsTo(Product)
Product.hasMany(Review)

// define one to many association between reivews and users
Review.belongsTo(User)
User.hasMany(Review)

// define one to many association between orders and users
Order.belongsTo(User)
User.hasMany(Order)

// define many-to-many association between orders and products using LineItem and through table
Order.belongsToMany(Product, {through: LineItem})
Product.belongsToMany(Order, {through: LineItem})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Review,
  Order
}
