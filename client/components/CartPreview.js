import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Divider from '@material-ui/core/divider'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import {CartItem} from '.'
import {fetchCart, editCart, removeCartItem} from '../store'
import history from '../history'

class CartPreview extends Component {
  constructor() {
    super()
    this.decrementQty = this.decrementQty.bind(this)
    this.incrementQty = this.incrementQty.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
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
    if (product.line_item.quantity < product.quantity) {
      this.props.editCart({
        quantity: product.line_item.quantity + 1,
        productId: product.id
      })
    }
  }

  deleteProduct(product) {
    this.props.deleteProduct(product.id)
  }

  render() {
    const {cart, handleCloseCartClick, handleClick, open} = this.props

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
      handleCloseCartClick()
    }

    console.log('cart', cart)
    if (cart) {
      return (
        <div className="cart-preview">
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          >
            <div className="cart-preview-box">
              <CloseOutlinedIcon
                className="cart-preview-close"
                onClick={handleClose}
              />
              {cart.products.length ? (
                cart.products.map(item => (
                  <Fragment key={item.id}>
                    <CartItem
                      product={item}
                      decrement={this.decrementQty}
                      increment={this.incrementQty}
                      delete={this.deleteProduct}
                    />
                    <Divider />
                  </Fragment>
                ))
              ) : (
                <Fragment>
                  <p>There are no items in your cart</p>
                  <Divider />
                </Fragment>
              )}
              <Button id="cart" onClick={handleClick}>
                Go to cart
              </Button>
            </div>
          </Snackbar>
        </div>
      )
    } else return null
  }
}

const mapState = state => ({
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  getCart: () => dispatch(fetchCart()),
  editCart: changeData => dispatch(editCart(changeData)),
  deleteProduct: productId => dispatch(removeCartItem(productId))
})

export default connect(mapState, mapDispatch)(CartPreview)
