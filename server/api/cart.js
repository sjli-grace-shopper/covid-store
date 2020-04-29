const router = require('express').Router()
const {Category, LineItem, Order, Product} = require('../db/models')
const dotenv = require('dotenv')

// load engironment variables
dotenv.config()

const Stripe = require('stripe')
const stripe = new Stripe(process.env.STRIPE_SECRET_TEST_KEY)

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      // Check if there is a cartId in session
      if (req.session.cartId) {
        // get the guest order
        const guestOrder = await Order.findOne({
          where: {id: req.session.cartId},
          include: [{model: Product}]
        })

        // get the user order
        const userOrder = await Order.findOne({
          where: {userId: req.user.id, status: 'IN_CART'}
        })

        // move all products to user order
        await Promise.all(
          guestOrder.products.map(product => {
            return LineItem.update(
              {
                orderId: userOrder.id
              },
              {
                where: {orderId: guestOrder.id, productId: product.id}
              }
            )
          })
        )

        // re-fetch the user's order, this time using eager-loading to get all products and line items
        const cart = await Order.findOne({
          where: {userId: req.user.id, status: 'IN_CART'},
          attributes: ['id', 'status'],
          include: [{model: Product}]
        })

        // set the cartId to undefined
        req.session.cartId = undefined

        console.log('UPDATED CART', cart.id)

        res.json(cart)
      } else {
        const cart = await Order.findOne({
          where: {userId: req.user.id, status: 'IN_CART'},
          attributes: ['id', 'status'],
          include: [{model: Product}]
        })

        // create a new cart if user does not have one
        if (!cart) {
          const newCart = await Order.create({
            status: 'IN_CART',
            userId: req.user.id
          })
          // add an empty
          newCart.dataValues.products = []
          // send back a new empty cart
          res.json(newCart)
        } else {
          // send back the user's cart
          res.json(cart)
        }
      }
    } else if (req.session.cartId) {
      // guest user has a cart
      const cart = await Order.findOne({
        where: {id: req.session.cartId},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })

      // check if there was a corresponding order (in case database was re-seeded or order was deleted somehow)
      if (!cart) {
        const newCart = await Order.create({status: 'IN_CART'})
        newCart.dataValues.products = []
        req.session.cartId = newCart.id
        res.json(newCart)
      } else {
        res.json(cart)
      }
    } else {
      // guest user does not have a cart
      const newCart = await Order.create({status: 'IN_CART'})
      newCart.dataValues.products = []
      req.session.cartId = newCart.id
      res.json(newCart)
    }
  } catch (err) {
    next(err)
  }
})

// POST /api/cart
router.post('/', async (req, res, next) => {
  try {
    const {quantity, productId} = req.body

    if (req.user) {
      // user is logged in
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })

      const newLineItem = {
        quantity: quantity,
        orderId: order.id,
        productId: productId
      }

      await LineItem.create(newLineItem)

      const newCart = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })
      res.json(newCart)
    } else if (req.session.cartId) {
      // user is not logged in

      const order = await Order.findOne({
        where: {id: req.session.cartId}
      })

      const newLineItem = {
        quantity: quantity,
        orderId: order.id,
        productId: productId
      }

      await LineItem.create(newLineItem)

      const newCart = await Order.findOne({
        where: {id: req.session.cartId},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })
      res.json(newCart)
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})

// PUT /api/cart
router.put('/', async (req, res, next) => {
  try {
    const {quantity, productId} = req.body

    if (req.user) {
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })

      await LineItem.update(
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
    } else if (req.session.cartId) {
      const order = await Order.findOne({
        where: {id: req.session.cartId}
      })

      await LineItem.update(
        {
          quantity: quantity
        },
        {
          where: {orderId: order.id, productId: productId}
        }
      )

      const newCart = await Order.findOne({
        where: {id: req.session.cartId},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })
      res.json(newCart)
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})

// DELETE /api/cart/:cartId
router.delete('/:productId', async (req, res, next) => {
  try {
    console.log('REQ', req)
    if (req.user) {
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })
      await LineItem.destroy({
        where: {orderId: order.id, productId: req.params.productId}
      })
      res.sendStatus(204).end()
    } else if (req.session.cartId !== undefined) {
      const order = await Order.findOne({
        where: {id: req.session.cartId}
      })
      await LineItem.destroy({
        where: {orderId: order.id, productId: req.params.productId}
      })
      res.sendStatus(204).end()
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/checkout', async (req, res, next) => {
  if (req.user) {
    try {
      // find user's cart
      const cart = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'},
        include: [{model: Product}]
      })

      // check to make sure there is adequate stock to place order
      if (
        !cart.products.every(product => {
          return product.quantity >= product.line_item.quantity
        })
      ) {
        throw new Error('Not Enough Stock to Place Order')
      }

      // get total payment amount in cents
      const paymentAmount = cart.products
        .reduce((total, product) => {
          return total + product.price * 100 * product.line_item.quantity
        }, 0)
        .toFixed(0)

      // complete payment with Stripe
      const payment = await stripe.charges.create({
        amount: paymentAmount,
        currency: 'USD',
        description: 'TEST123',
        source: req.body.source
      })

      // console.log(payment)

      // set price in each lineitem
      await Promise.all(
        cart.products.map(product => {
          return LineItem.update(
            {
              price: product.price
            },
            {
              where: {orderId: cart.id, productId: product.id}
            }
          )
        })
      )

      // reduce stock
      await Promise.all(
        cart.products.map(product => {
          return Product.update(
            {
              quantity: product.quantity - product.line_item.quantity
            },
            {
              where: {id: product.id}
            }
          )
        })
      )

      // mark order status as processing
      await Order.update(
        {
          status: 'PROCESSING'
        },
        {
          where: {userId: req.user.id, status: 'IN_CART'}
        }
      )

      res.json({orderId: cart.id})
    } catch (err) {
      next(err)
    }
  } else {
    res.send('GUEST')
  }
})

module.exports = router
