/* eslint-disable complexity */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import {Button, MenuItem, Select} from '@material-ui/core'

import {fetchCategories} from '../store'

class ProductForm extends Component {
  componentDidMount() {
    this.props.getCategories()
    if (this.props.isEdit) {
      this.setState(this.props.product)
    }
  }

  render() {
    const {categories, handleChange, handleSubmit, isEdit, product} = this.props

    const formTitle = isEdit ? 'Edit Product' : 'New Product Form'

    return (
      <form onSubmit={handleSubmit} className="product-form">
        <div className="product-form-row-1">
          <h3>{formTitle}</h3>
        </div>
        <div className="product-form-row-2">
          <InputLabel id="name-label">Name</InputLabel>
          <TextField
            className="product-form name"
            type="text"
            name="name"
            align="center"
            variant="outlined"
            value={product.name}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="product-form-row-3">
          <InputLabel id="description-label">Description</InputLabel>
          <TextField
            className="product-form description"
            type="text"
            name="description"
            variant="outlined"
            value={product.description}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="product-form-row-4">
          <InputLabel id="price-label">Price</InputLabel>
          <OutlinedInput
            className="product-form price"
            type="double"
            name="price"
            variant="outlined"
            placeholder="Price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={product.price}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="product-form-row-5">
          <InputLabel id="image-label">Image URL</InputLabel>
          <TextField
            className="product-form imgUrl"
            type="text"
            name="imageUrl"
            variant="outlined"
            value={product.imageUrl}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="product-form-row-6">
          <InputLabel id="quantity-label">Quantity</InputLabel>
          <TextField
            className="product-form quantity"
            type="integer"
            name="quantity"
            variant="outlined"
            value={product.quantity}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="product-form-row-7">
          <InputLabel id="select-label">Category</InputLabel>
          <Select
            labelId="select-outlined-label"
            id="select-outlined"
            name="categoryId"
            variant="outlined"
            value={product.categoryId}
            onChange={handleChange}
            label="Category"
            className="product-form category"
            fullWidth
          >
            {categories.map(cat => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="product-form-row-8">
          <Button variant="contained" type="submit" value="Submit">
            Submit
          </Button>
        </div>
      </form>
    )
  }
}

const mapState = state => ({
  categories: state.categories.categoryList,
  products: state.products.productList
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapState, mapDispatch)(ProductForm)
