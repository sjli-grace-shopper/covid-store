// Cart Item component
// mapState - state.cart.cart, state.cart.isFetching, state.user.id (loggedin)
// mapDispatch - dispatch(addOrder) from accountsReducer

import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, editCart} from '../store/reducers/cartReducer'
import CartItem from './CartItem'

class Cart extends React.Component {
  constructor() {
    super()
    this.decrementQty = this.decrementQty.bind(this)
    this.incrementQty = this.incrementQty.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }

  decrementQty(product) {
    // user cannot decrement quantity to below 1
    if (product.line_item.quantity > 1) {
      this.props.editCart({
        quantity: product.line_item.quantity - 1,
        productId: product.id
      })
    }
  }

  incrementQty(product) {
    this.props.editCart({
      quantity: product.line_item.quantity + 1,
      productId: product.id
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="cart">
        <h1>SHOPPING CART</h1>

        {this.props.cart.products ? (
          <div id="cart-content">
            <div id="cart-items">
              {this.props.cart.products.map(product => {
                return (
                  <CartItem
                    key={product.id}
                    product={product}
                    decrement={this.decrementQty}
                    increment={this.incrementQty}
                  />
                )
              })}
            </div>
            <div id="cart-checkout">
              <h3>
                subtotal: $
                {this.props.cart.products
                  .reduce((subtotal, product) => {
                    return subtotal + product.price * product.line_item.quantity
                  }, 0)
                  .toFixed(2)}
              </h3>
              <button type="button">Checkout</button>
            </div>
          </div>
        ) : (
          <h3>Cart Is Empty</h3>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    editCart: newProduct => dispatch(editCart(newProduct))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
