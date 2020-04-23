const router = require('express').Router()
const {Category, LineItem, Order, Product} = require('../db/models')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const cart = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })
      res.json(cart)
    } else {
      res.json(req.session.cart)
    }
  } catch (err) {
    next(err)
  }
})

// POST /api/cart
router.post('/', async (req, res, next) => {
  try {
    const {purchaseQty, product} = req.body

    if (req.user) {
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })

      const lineItem = {
        quantity: purchaseQty,
        orderId: order.id,
        productId: product.id
      }

      const cartObj = Object.assign({lineItem}, product)
      res.json(cartObj)
    } else {
      const lineItem = {
        quantity: purchaseQty,
        productId: product.id
      }

      const cartObj = Object.assign({lineItem}, product)
      req.session.cart.products.push(cartObj)
      res.json(cartObj)
    }
  } catch (err) {
    next(err)
  }
})

// PUT /api/cart
router.put('/', async (req, res, next) => {
  console.log('HERE', req.body)
  try {
    const {quantity, productId} = req.body

    if (req.user) {
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })

      const updatedLineItem = await LineItem.update(
        {
          quantity: quantity
        },
        {
          where: {orderId: order.id, productId: productId}
        }
      )

      const newCart = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })
      res.json(newCart)
    } else {
      const lineItem = {
        quantity: purchaseQty,
        productId: product.id
      }
      const cartObj = Object.assign({lineItem}, product)

      const filteredCart = req.session.cart.products.filter(
        item => item.id !== product.id
      )
      req.session.cart.products = [...filteredCart, cartObj]
      res.json(cartObj)
    }
  } catch (err) {
    next(err)
  }
})

// DELETE /api/cart/:cartId
router.put('/:id', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })
      await LineItem.destroy({
        where: {orderId: order.id, productId: req.params.id}
      })
      res.sendStatus(204).end()
    } else {
      const productId = req.params.id
      req.session.cart.products = req.session.cart.products.filter(
        product => product.id !== productId
      )
      res.sendStatus(204).end()
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
