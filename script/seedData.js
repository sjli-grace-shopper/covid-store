const users = [
  {
    firstName: 'Anne',
    lastName: 'Hathaway',
    email: 'ahathaway@gmail.com',
    address: '123 Lurline Dr.',
    password: 'anne123',
    isAdmin: true,
    googleId: null
  },
  {
    firstName: 'Amal',
    lastName: 'Clooney',
    email: 'amallawyer@outlook.com',
    address: '213 Dainty Dr.',
    password: 'amal213',
    isAdmin: false,
    googleId: null
  },
  {
    firstName: 'Robert',
    lastName: 'Downey Jr',
    email: 'rdj@yahoo.com',
    address: '321 Kickbutt Dr.',
    password: 'rob321',
    isAdmin: false,
    googleId: null
  },
  {
    firstName: 'Matt',
    lastName: 'Damon',
    email: 'mdamon@gmail.com',
    address: '312 Lurkspire Ln.',
    password: 'matt312',
    isAdmin: true,
    googleId: null
  },
  {
    firstName: 'Angelina',
    lastName: 'Jolie',
    email: 'ajolieproducts@outlook.com',
    address: '111 Berkshire Ln.',
    password: 'angie111',
    isAdmin: false,
    googleId: null
  },
  {
    firstName: 'Will',
    lastName: 'Smith',
    email: 'willies@yahoo.com',
    address: '122 Bonkers Rd.',
    password: 'will122',
    isAdmin: false,
    googleId: null
  },
  {
    firstName: 'Beyonce',
    lastName: 'Knowles',
    email: 'queenbey@gmail.com',
    address: '133 Racket Rd.',
    password: 'matt133',
    isAdmin: true,
    googleId: null
  },
  {
    firstName: 'Dwayne',
    lastName: 'Johnson',
    email: 'therock@gmail.com',
    address: '211 Rock Rd.',
    password: 'dwayne211',
    isAdmin: false,
    googleId: null
  }
]

const products = [
  {
    name: 'Charmin Soft Toilet Paper',
    category: 'toilet-paper',
    description: 'Ultra soft toilet paper for your comfort during quarantine.',
    price: 10,
    imageUrl:
      'https://images.homedepot-static.com/productImages/021faf30-1ce7-42d5-bdfe-c7ea5783be4c/svn/charmin-toilet-paper-003700096798-64_1000.jpg',
    quantity: 15
  },
  {
    name: 'Angel Soft Toilet Paper',
    category: 'toilet-paper',
    description: 'Designed with softness and strength.',
    price: 7,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0199/0551/1488/products/Angel_Soft_105_1200x1200.PNG?v=1548807156',
    quantity: 20
  },
  {
    name: 'Puell Hand Sanitizer',
    category: 'sanitation',
    description:
      'Helps reduce bacteria on the skin Leaves hands feeling soft Kills the most germs.',
    price: 5,
    imageUrl: 'https://pics.drugstore.com/prodimg/44426/900.jpg',
    quantity: 50
  },
  {
    name: 'Softsoap',
    category: 'sanitation',
    description:
      'Liquid Hand Softsoap is carefully formulated using safe, effective ingredients leaving hands clean and soft.',
    price: 3,
    imageUrl:
      'https://www.cvs.com/bizcontent/merchandising/productimages/large/7418226800_3.jpg',
    quantity: 45
  },
  {
    name: '3M Facemask',
    category: 'facemask',
    description:
      'Helps keep non-harmful dust out of your nose, mouth, and lungs.',
    price: 6,
    imageUrl:
      'https://www.cvs.com/bizcontent/merchandising/productimages/large/5111108654.jpg',
    quantity: 36
  },
  {
    name: 'Safegaurd Nitrile Gloves',
    category: 'gloves',
    description:
      'Ambidextrous, textured and contoured fingers for improved grip.',
    price: 12,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81Rhzlq6PlL._AC_SL1500_.jpg',
    quantity: 3
  }
]

const reviews = [
  {
    rating: 3,
    userId: 1,
    productId: 1,
    reviewText:
      'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah face mask.'
  },
  {
    rating: 4,
    userId: 2,
    productId: 3,
    reviewText:
      'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah soap.'
  },
  {
    rating: 5,
    userId: 3,
    productId: 2,
    reviewText:
      'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah toilet paper.'
  },
  {
    rating: 3,
    userId: 4,
    productId: 4,
    reviewText:
      'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah hand sanitizer.'
  },
  {
    rating: 2,
    userId: 4,
    productId: 5,
    reviewText:
      'face mask blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
  },
  {
    rating: 4,
    userId: 3,
    productId: 6,
    reviewText:
      'hand sanitizer blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
  },
  {
    rating: 2,
    userId: 2,
    productId: 4,
    reviewText:
      'soap blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
  },
  {
    rating: 4,
    userId: 1,
    productId: 2,
    reviewText:
      'soap blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah face mask.'
  }
]

const orders = [
  {
    status: 'PROCESSING',
    userId: 1
  },
  {
    status: 'PROCESSING',
    userId: 2
  },
  {
    status: 'CREATED',
    userId: 3
  },
  {
    status: 'CREATED',
    userId: 4
  }
]

const lineItems = [
  {
    orderId: 1,
    productId: 1,
    quantity: 5,
    price: 2.99
  },
  {
    orderId: 1,
    productId: 2,
    quantity: 1,
    price: 5.99
  },
  {
    orderId: 1,
    productId: 3,
    quantity: 7,
    price: 1.99
  }
]

module.exports = {users, products, orders, lineItems, reviews}
