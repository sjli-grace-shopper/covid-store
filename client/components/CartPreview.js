import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Divider from '@material-ui/core/divider'
import CancelPresentationOutlined from '@material-ui/icons/CancelPresentationOutlined'

import {CartItem} from '.'
import {fetchCart} from '../store'
import history from '../history'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

class CartPreview extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    const {cart, handleCloseCartClick, open} = this.props

    const handleClick = () => {
      history.push('/cart')
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
      handleCloseCartClick()
    }

    if (cart) {
      console.log('PP', this.props)
      return (
        <div className="cart-preview">
          <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          >
            <div className="cart-preview-box" onClick={handleClose}>
              <CancelPresentationOutlined
                className="cart-preview-close"
                onClick={handleClose}
              />
              {cart.products.map(item => (
                <Fragment key={item.id}>
                  <CartItem product={item} />
                  <Divider />
                </Fragment>
              ))}
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
  getCart: () => dispatch(fetchCart())
})

export default connect(mapState, mapDispatch)(CartPreview)
