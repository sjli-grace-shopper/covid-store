import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, checkout} from '../store/reducers/cartReducer'
import CheckoutCartItem from './CheckoutCartItem'
import axios from 'axios'

import StripeCheckout from 'react-stripe-checkout'

class Checkout extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  onToken = token => {
    axios
      .put('/api/cart/checkout', {
        source: token.id
      })
      .then(response => {
        this.props.history.push(`/orders/receipt/${response.data.orderId}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.props.cart.products.length > 0 ? (
          <div id="checkout">
            <div id="checkout-contact">
              {this.props.isLoggedIn ? (
                <div>
                  <p>
                    Confirmation will be emailed to: {this.props.user.email}
                  </p>
                  <p>Order will be shipped to: {this.props.user.address}</p>
                  <StripeCheckout
                    token={this.onToken}
                    s
                    stripeKey="pk_test_54bq4KHZTDzCzwuzinIyeOjJ00Q6DoO0gR"
                  />
                </div>
              ) : (
                <p>Login to Continue Checkout</p>
              )}
            </div>
            <div id="checkout-cart">
              {this.props.cart.products.map(product => {
                return (
                  <div key={product.id}>
                    <CheckoutCartItem product={product} />
                    <hr />
                  </div>
                )
              })}
              <h2>
                Total: $
                {this.props.cart.products
                  .reduce((subtotal, product) => {
                    return subtotal + product.price * product.line_item.quantity
                  }, 0)
                  .toFixed(2)}
              </h2>
            </div>
          </div>
        ) : (
          <h1>No Items In Cart</h1>
        )}
      </div>
    )
  }
}

// need to re-fetch product price and stock
// when user clicks cnfirm order it will adjust stock of each item
// also needs to update price in each lineitem
// only show user info form if user is not logged in

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    cart: state.cart.cart
  }
}

const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    checkout: () => dispatch(checkout())
  }
}

export default connect(mapState, mapDispatch)(Checkout)
