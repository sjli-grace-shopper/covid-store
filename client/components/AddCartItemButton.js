import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'

import {addCartItem, editCart} from '../store/reducers/cartReducer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  minusBtn: {
    flex: 0.5
  },
  numBtn: {
    flex: 1
  },
  plusBtn: {
    flex: 0.5
  }
}))

const AddCartItemButton = props => {
  const [purchaseQty, setPurchaseQty] = useState(1)
  const {addToCart, cart, product, updateCart} = props
  const classes = useStyles()

  const handleIncreaseQty = () => {
    setPurchaseQty(purchaseQty + 1)
  }

  const handleDecreaseQty = () => {
    setPurchaseQty(purchaseQty - 1)
  }

  const handleAddItems = evt => {
    evt.preventDefault()
    const productInCart = cart.products.filter(
      cartProduct => cartProduct.id === product.id
    )
    if (!productInCart.length) {
      addToCart({purchaseQty, product})
      setPurchaseQty(1)
    } else {
      const newQty = productInCart[0].lineItem.quantity + purchaseQty
      updateCart({purchaseQty: newQty, product})
    }
  }

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleDecreaseQty} className={classes.minusBtn}>
          -
        </Button>
        <Button className={classes.numBtn}>{purchaseQty}</Button>
        <Button onClick={handleIncreaseQty} className={classes.plusBtn}>
          +
        </Button>
      </ButtonGroup>
      <Button onClick={handleIncreaseQty}>ADD TO CART</Button>
    </div>
  )
}

const mapState = state => ({
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  addToCart: product => dispatch(addCartItem(product)),
  updateCart: product => dispatch(editCart(product))
})

export default connect(mapState, mapDispatch)(AddCartItemButton)
