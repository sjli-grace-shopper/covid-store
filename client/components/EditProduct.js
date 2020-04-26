import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import {editProduct, fetchProducts} from '../store'
import {ProductForm} from '.'

const defaultState = {
  id: '',
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  quantity: 0,
  categoryId: 0
}

class EditProduct extends Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get(`/api/products/${this.props.id}`)
    const {id, name, description, price, imageUrl, quantity, categoryId} = data
    this.setState({
      id,
      name,
      description,
      price,
      imageUrl,
      quantity,
      categoryId
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    try {
      this.props.updateProduct(this.state)
    } catch (err) {
      console.log('Error dispatching editProduct: ', err)
    }
  }

  render() {
    console.log('PRODUCT', this.state)

    if (Object.keys(this.state).length > 0) {
      return (
        <div id="edit-product">
          <ProductForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            product={this.state}
            isEdit={true}
          />
        </div>
      )
    } else return null
  }
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.productId
  return {
    id
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  updateProduct: product => dispatch(editProduct(product.id, product, ownProps))
})

export default withRouter(connect(mapState, mapDispatch)(EditProduct))
