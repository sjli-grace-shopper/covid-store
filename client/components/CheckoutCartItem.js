import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import React from 'react'

export default function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={props.product.imageUrl} width="100" />
      </div>
      <div className="cart-item-info">
        <p>Product Name: {props.product.name}</p>
        <p>Price: {props.product.price}</p>
      </div>
    </div>
  )
}
