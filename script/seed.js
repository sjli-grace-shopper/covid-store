const db = require('../server/db')

const {User, Product, Review, Order, LineItem} = require('../server/db/models')
const {users, products, orders, lineItems, reviews} = require('./seedData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

const seed = async () => {
  try {
    await db.sync({force: true})

    // seed your database here!
    await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )
    await Promise.all(
      products.map(product => {
        return Product.create(product)
      })
    )
    await Promise.all(
      reviews.map(review => {
        return Review.create(review)
      })
    )
    await Promise.all(
      orders.map(order => {
        return Order.create(order)
      })
    )
    await Promise.all(
      lineItems.map(lineItem => {
        return LineItem.create(lineItem)
      })
    )
  } catch (err) {
    console.log(err)
  }
}
module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh no! Something went wrong!')
      console.error(err)
      db.close()
    })
}
