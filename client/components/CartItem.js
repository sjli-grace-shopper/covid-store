// DeleteCartItemButton component
// mapDispatch - dispatch(editCart())

import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function CartItem(props) {
  return (
    <div>
      <p>Product Name: {props.product.name}</p>
      <p>Product Description: {props.product.description}</p>
      <p>Quantity: {props.product.line_item.quantity}</p>
      <p>Price: {props.product.price}</p>
      <button type="button" onClick={() => props.decrement(props.product)}>
        decrement
      </button>
      <button type="button" onClick={() => props.increment(props.product)}>
        increment
      </button>
      <button type="button" onClick={() => props.delete(props.product)}>
        delete
      </button>
    </div>
  )
}
