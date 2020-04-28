const router = require('express').Router()
const {Order, Product, LineItem} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({})
    res.send(orders)
  } catch (error) {
    next(error)
  }
})
router.get('/:orderId', async (req, res, next) => {
  try {
    const orderDetails = await Order.findAll({
      where: {id: req.params.orderId}
    })
    res.send(orderDetails)
  } catch (error) {
    next(error)
  }
})
router.get('/history', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {userId: req.user.id}
    })
    res.send(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/history/:orderId', async (req, res, next) => {
  try {
    const orderDetails = await Order.findAll({
      where: {id: req.params.orderId},
      include: [{model: Product}]
    })
    res.send(orderDetails)
  } catch (error) {
    next(error)
  }
})
router.put('/history/:orderId', async (req, res, next) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.orderrId
      },
      returning: true
    }).then(() => {
      res.sendStatus(204)
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
