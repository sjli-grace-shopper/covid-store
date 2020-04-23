// DeleteCartItemButton component
// mapDispatch - dispatch(editCart())

import React from 'react'

export default function CartItem(props) {
  return (
    <div>
      <p>Product Name: {props.product.name}</p>
      <p>Product Description: {props.product.description}</p>
      <p>Quantity: {props.product.line_item.quantity}</p>
      <p>Price: {props.product.line_item.price}</p>
    </div>
  )
}
