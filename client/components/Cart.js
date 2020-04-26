import React from 'react'
import {connect} from 'react-redux'
import {
  fetchCart,
  editCart,
  removeCartItem,
  addCartItem
} from '../store/reducers/cartReducer'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'

class Cart extends React.Component {
  constructor() {
    super()
    this.decrementQty = this.decrementQty.bind(this)
    this.incrementQty = this.incrementQty.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
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

  deleteProduct(product) {
    this.props.deleteProduct(product.id)
  }

  addProduct() {
    this.props.addProduct({
      quantity: Math.ceil(Math.random() * 20),
      productId: Math.ceil(Math.random() * 400)
    })
  }

  render() {
    console.log('CART STATE', this.props)
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
                    delete={this.deleteProduct}
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
              <Link to="/cart/checkout">Checkout</Link>
              <button type="button" onClick={this.addProduct}>
                Add Random Item
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3>Cart Is Empty</h3>
            <button type="button" onClick={this.addProduct}>
              Add Random Item
            </button>
          </div>
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
    editCart: changeData => dispatch(editCart(changeData)),
    deleteProduct: productId => dispatch(removeCartItem(productId)),
    addProduct: productData => dispatch(addCartItem(productData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
