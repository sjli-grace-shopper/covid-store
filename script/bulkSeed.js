const users = require('./bulkData/users')
const reviews = require('./bulkData/reviews')
const orders = require('./bulkData/orders')
const lineItems = require('./bulkData/lineItems')
const products = require('./bulkData/products')

const categories = [
  {name: 'masks'},
  {name: 'toilet-paper'},
  {name: 'sanitizers'},
  {name: 'gloves'}
]

module.exports = {users, products, orders, lineItems, reviews, categories}
