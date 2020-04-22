const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Order = require('./order')
const LineItem = require('./lineItem')
const Category = require('./Category')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// define one to many association between orders and users
Order.belongsTo(User)
User.hasMany(Order)

// define one to many association between products and categories
Product.belongsTo(Category)
Category.hasMany(Product)

// define many-to-many association between users and products using Review through table
User.belongsToMany(Product, {through: Review})
Product.belongsToMany(User, {through: Review})

// define many-to-many association between orders and products using LineItem through table
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
  Order,
  LineItem,
  Category
}
