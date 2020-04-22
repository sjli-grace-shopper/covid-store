import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const AddCartItemButton = () => {
  const [purchaseQty, setPurchaseQty] = useState(1)

  const handleChange = evt => {
    setPurchaseQty({
      [evt.target.name]: +evt.target.value
    })
  }

  const handleAddToCart = evt => {
    evt.preventDefault()
    const {product, cart} = this.props
  }
}

export default AddCartItemButton
