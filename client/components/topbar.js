import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import {logout} from '../store'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const TopBar = props => {
  const classes = useStyles()
  const {cart, handleClick, isLoggedIn} = props
  const handlePageChange = () => {
    window.location.href = '/cart'
  }
  const isInvisible = cart.products.length < 1
  console.log('PROPS', props)
  console.log('CART', cart.products.length)
  const hasCart = cart.products.length
  if (cart && hasCart) {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <Link to="/">Home</Link>
        </div>
        {isLoggedIn ? (
          <div className="top-bar-right">
            {/* The navbar will show these links after you log in */}
            <Link to="/profile">Account</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <ShoppingBasketIcon onClick={handlePageChange} />
            <Link to="/cart">Cart</Link>
          </div>
        ) : (
          <div className="top-bar-right">
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>

            <span className={classes.root}>
              <Badge badgeContent={cart.products.length} color="default">
                <ShoppingBasketIcon
                  className="cart-icon"
                  onClick={handlePageChange}
                />
              </Badge>
            </span>
          </div>
        )}
      </div>
    )
  } else return null
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id,
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout())
  }
})

export default connect(mapState, mapDispatch)(TopBar)
