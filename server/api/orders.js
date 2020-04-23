const router = require('express').Router()
const {Order, User} = require('../db/models')

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
module.exports = router
