const router = require('express').Router()
const {Category, Product, Review, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{model: Review, include: [User]}]
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
      include: [{model: Review, include: [User]}]
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, description, price, imageUrl, quantity} = req.body
    const newProduct = await Product.create({
      name,
      description,
      price,
      imageUrl,
      quantity
    })
    const product = await Product.findByPk(newProduct.id, {
      include: [{model: Category}, {model: Review, include: [User]}]
    })
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {all: true},
        {model: Category},
        {model: Review, include: [User]}
      ]
    })
    product.update(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.post('/:id/review', async (req, res, next) => {
  try {
    const {rating, reviewText} = req.body
    const userId = req.user.id
    const productId = req.params.id
    await Review.create({
      userId,
      productId,
      rating,
      reviewText
    })
    const reviewUser = await User.findByPk(req.user.id)
    const reviewObj = {
      user: reviewUser,
      userId,
      productId,
      rating,
      reviewText
    }
    res.json(reviewObj)
  } catch (err) {
    next(err)
  }
})

module.exports = router
