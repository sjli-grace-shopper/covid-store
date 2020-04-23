// Cart Item component
// mapState - state.cart.cart, state.cart.isFetching, state.user.id (loggedin)
// mapDispatch - dispatch(addOrder) from accountsReducer

import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/reducers/cartReducer'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    console.log(this.props.cart)
    return (
      <div className="cart">
        <p>THIS IS A TEST</p>
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
