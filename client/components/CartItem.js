import React from 'react'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import history from '../history'

export default function CartItem(props) {
  const handleClick = evt => {
    history.push(`/products/${evt}`)
  }
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={props.product.imageUrl} width="150" />
      </div>
      <div className="cart-item-info">
        <p
          className="cart-item-name"
          onClick={() => handleClick(props.product.id)}
        >
          {props.product.name}
        </p>
        <p className="cart-item-price">${props.product.price}</p>
        <div className="button-group">
          <ButtonGroup>
            <Button
              className="num-button"
              onClick={() => props.decrement(props.product)}
            >
              -
            </Button>
            <Button>{props.product.line_item.quantity}</Button>
            <Button
              className="num-button"
              onClick={() => props.increment(props.product)}
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            className="delete"
            variant="outlined"
            onClick={() => props.delete(props.product)}
          >
            delete
          </Button>
        </div>
        {/* <p>Total Stock: {props.product.quantity}</p> */}
      </div>
    </div>
  )
}
