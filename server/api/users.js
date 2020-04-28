const router = require('express').Router()
const {Order, User} = require('../db/models')
module.exports = router
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

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/account', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: [{model: Order, include: [{all: true}]}]
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
router.get('/:userId', isLoggedIn, async (req, res, next) => {
  try {
    await User.findByPk(req.params.userId).then(user => {
      if (!user) {
        return res.sendStatus(404)
      }
      res.send(user)
    })
  } catch (err) {
    next(err)
  }
})
router.put('/:userId', isLoggedIn, async (req, res, next) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.userId
      },
      returning: true
    }).then(() => {
      res.sendStatus(204)
    })
  } catch (err) {
    next(err)
  }
})
router.delete('/:userId', isAdmin, (req, res, next) => {
  try {
    User.destroy({
      where: {
        id: req.params.userId
      }
    }).then(() => {
      res.sendStatus(204)
    })
  } catch (err) {
    next(err)
  }
})
