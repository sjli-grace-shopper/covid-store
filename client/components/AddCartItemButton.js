import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import {fetchCart, editCart, addCartItem} from '../store/reducers/cartReducer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
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

  console.log('BUTTON PROPS', props)

  // useEffect(() => {
  //   props.getCart()
  // }, [])

  const handleIncreaseQty = () => {
    setPurchaseQty(purchaseQty + 1)
  }

  const handleDecreaseQty = () => {
    if (purchaseQty > 0) setPurchaseQty(purchaseQty - 1)
  }

  const handleAddItems = evt => {
    evt.preventDefault()
    const productInCart = cart.products.filter(
      cartProduct => cartProduct.id === product.id
    )
    if (!productInCart.length) {
      addToCart({quantity: purchaseQty, productId: product.id})
      setPurchaseQty(1)
    } else {
      const newQty = productInCart[0].line_item.quantity + purchaseQty
      updateCart({quantity: newQty, productId: product.id})
    }
  }

  return (
    <div className={classes.root}>
      <ButtonGroup aria-label="outlined primary button group">
        <Button
          onClick={handleDecreaseQty}
          className={`${classes.minusBtn} num-button`}
        >
          -
        </Button>
        <Button className={classes.numBtn}>{purchaseQty}</Button>
        <Button
          onClick={handleIncreaseQty}
          className={`${classes.plusBtn} num-button`}
        >
          +
        </Button>
      </ButtonGroup>
      <Button
        className="add-button"
        variant="outlined"
        onClick={handleAddItems}
      >
        Add to Cart
      </Button>
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
