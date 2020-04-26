const router = require('express').Router()
const {Category, LineItem, Order, Product} = require('../db/models')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      // CHECK IF THERE IS A CART IN THE SESSION
      // transfer session cart to db and then remove cart from session
      const cart = await Order.findOne({
        where: {userId: req.user.id, status: 'IN_CART'},
        attributes: ['id', 'status'],
        include: [{model: Product}]
      })

      // create a new cart if user does not have one
      if (!cart) {
        const newCart = Order.create({status: 'IN_CART', userId: req.user.id})
        res.json(newCart)
      } else {
        res.json(cart)
      }
    } else {
      console.log('REQ>SESSION>CART', req.session.cart)
      res.json(req.session.cart)
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

      // const cartObj = Object.assign({lineItem}, product)
      // res.json(cartObj)
    } else if (req.session !== undefined) {
      const productToAdd = await Product.findByPk(productId)

      productToAdd.dataValues.line_item = {quantity: quantity}

      if (req.session.cart === undefined) {
        req.session.cart = {products: [productToAdd]}
      } else {
        req.session.cart.products.push(productToAdd)
      }

      res.json(req.session.cart)
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
    } else if (req.session.cart !== undefined) {
      // verify user has a session and cart
      let productToChange = req.session.cart.products.find(
        product => product.id === productId
      )
      productToChange.line_item.quantity = quantity
      res.json(req.session.cart)
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
