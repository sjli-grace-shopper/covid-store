// mapState - state.categories (to select category)
import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store/reducers/productReducer'

class ProductForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      quantity: 0,
      category: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    try {
      this.props.createProduct(this.state)
    } catch (err) {
      console.log(err)
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div id="container">
        <h4>New Product Form:</h4>
        <form onSubmit={this.handleSubmit} className="productForm">
          <label className="column" htmlFor="name">
            Name:
          </label>
          <input
            className="productForm name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label className="column" htmlFor="description">
            Description:
          </label>
          <input
            className="productForm description"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <div className="productForm-row-1">
            <label className="column" htmlFor="price">
              price:
            </label>
            <input
              className="productForm price"
              type="double"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <label className="column" htmlFor="imageUrl">
              Image Url:
            </label>
            <input
              className="productForm imgUrl"
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </div>
          <div className="productForm-row-2">
            <label className="column" htmlFor="quantity">
              Quantity:
            </label>
            <input
              className="productForm quantity"
              type="integer"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <label className="column" htmlFor="category">
              Category Number:
            </label>
            <input
              className="productForm category"
              type="integer"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
          <br />
          <br />
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    createProduct: product => dispatch(addProduct(product))
  }
}

export default connect(null, mapDispatch)(ProductForm)
