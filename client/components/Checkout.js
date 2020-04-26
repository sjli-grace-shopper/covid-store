import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, checkout} from '../store/reducers/cartReducer'
import CheckoutCartItem from './CheckoutCartItem'
import Button from '@material-ui/core/Button'

class Checkout extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    return (
      <div>
        {this.props.cart.products ? (
          <div id="checkout">
            <div id="checkout-contact">
              {this.props.isLoggedIn ? (
                <div>
                  <p>
                    Confirmation will be emailed to: {this.props.user.email}
                  </p>
                  <p>Order will be shipped to: {this.props.user.address}</p>
                </div>
              ) : (
                <p>not logged in</p>
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
              <Button onClick={() => this.props.checkout()}>
                CONFIRM ORDER
              </Button>
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
