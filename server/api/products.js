const router = require('express').Router()
const {Category, Product, Review, User} = require('../db/models')

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(404)
    next(new Error('Not authorized'))
  } else {
    next()
  }
}
const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    res.status(404)
    next(new Error('Not authenticated'))
  } else {
    next()
  }
}

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

router.post('/', isAdmin, async (req, res, next) => {
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

router.put('/:id', isAdmin, async (req, res, next) => {
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

router.post('/:id/review', isLoggedIn, async (req, res, next) => {
  try {
    const {rating, reviewText} = req.body
    await Review.create({
      userId: req.user.id,
      productId: req.params.id,
      rating,
      reviewText
    })
    const reviewUser = await User.findByPk(req.user.id)
    const newReview = await Review.findOne({
      where: {reviewText: reviewText, userId: req.user.id}
    })
    const reviewObj = {
      id: newReview.id,
      createdAt: newReview.createdAt,
      user: reviewUser,
      userId: req.user.id,
      productId: req.params.id,
      rating,
      reviewText
    }
    res.json(reviewObj)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    await Product.destroy({where: {id: req.params.id}})
    res.sendStatus(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
