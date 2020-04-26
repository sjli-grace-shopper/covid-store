const router = require('express').Router()
const {Category, LineItem, Order, Product} = require('../db/models')

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
            LineItem.update(
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

      res.json(cart)
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

router.put('/checkout', async (req, res, next) => {
  if (req.user) {
    const cart = await Order.findOne({
      where: {userId: req.user.id, status: 'IN_CART'},
      include: [{model: Product}]
    })
    // set price in each lineitem
    await Promise.all(
      cart.products.map(product => {
        LineItem.update(
          {
            price: product.price
          },
          {
            where: {orderId: cart.id, productId: product.id}
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
    res.send('ORDER PROCESSED')
  }
  res.send('GUEST')
})

// DELETE /api/cart/:cartId
router.delete('/:productId', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'}
      })
      await LineItem.destroy({
        where: {orderId: order.id, productId: req.params.productId}
      })
      res.sendStatus(204).end()
    } else if (req.session.cart !== undefined) {
      req.session.cart.products = req.session.cart.products.filter(
        product => product.id !== parseInt(req.params.productId, 10)
      )
      res.sendStatus(204).end()
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
