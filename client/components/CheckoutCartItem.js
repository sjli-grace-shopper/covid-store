import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import React from 'react'

export default function CartItem(props) {
  return (
    <div className="checkout-item">
      <div className="checkout-item-image">
        <img src={props.product.imageUrl} width="75" />
      </div>
      <div className="cart-item-info">
        <h4>Item: {props.product.name}</h4>
        <p>
          Price: ${props.product.price} - Qty:{' '}
          {props.product.line_item.quantity}
        </p>
      </div>
    </div>
  )
}
