// Cart Item component
// mapState - state.cart.cart, state.cart.isFetching, state.user.id (loggedin)
// mapDispatch - dispatch(addOrder) from accountsReducer

import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/reducers/cartReducer'
import CartItem from './CartItem'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    console.log(this.props.cart)
    return (
      <div className="cart">
        <div>SHOPPING CART</div>
        <div id="cart-content">
          <div id="cart-items">
            {this.props.cart.products ? (
              this.props.cart.products.map(product => {
                return <CartItem key={product.id} product={product} />
              })
            ) : (
              <h3>Cart Is Empty</h3>
            )}
          </div>
          <div id="cart-checkout">
            <h3>subtotal</h3>
          </div>
        </div>
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
    getCart: () => dispatch(fetchCart())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
