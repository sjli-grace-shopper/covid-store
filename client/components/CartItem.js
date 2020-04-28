import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import React from 'react'

export default function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={props.product.imageUrl} width="150" />
      </div>
      <div className="cart-item-info">
        <p>Product Name: {props.product.name}</p>
        <p>Price: {props.product.price}</p>
        <ButtonGroup>
          <Button onClick={() => props.decrement(props.product)}>-</Button>
          <Button>{props.product.line_item.quantity}</Button>
          <Button onClick={() => props.increment(props.product)}>+</Button>
          <Button onClick={() => props.delete(props.product)}>delete</Button>
        </ButtonGroup>
        <p>Total Stock: {props.product.quantity}</p>
      </div>
    </div>
  )
}
