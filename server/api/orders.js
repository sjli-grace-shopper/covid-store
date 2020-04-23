const router = require('express').Router()
const {Order, Product, LineItem} = require('../db/models')

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

module.exports = router
