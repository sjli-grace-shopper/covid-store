import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addProduct} from '../store'
import {ProductForm} from '.'

const defaultState = {
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  quantity: 0,
  categoryId: ''
}

class AddProduct extends Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    try {
      this.props.createProduct({
        ...this.state,
        price: +this.state.price,
        quantity: +this.state.quantity
      })
      this.setState(defaultState)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div id="container">
        <ProductForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          product={this.state}
        />
      </div>
    )
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  createProduct: product => dispatch(addProduct(product, ownProps))
})

export default connect(null, mapDispatch)(AddProduct)
