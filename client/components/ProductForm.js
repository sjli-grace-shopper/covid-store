// mapState - state.categories (to select category)
import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store/reducers/productReducer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          New Product Form:
        </Typography>
        <Grid container spacing={3}>
          <form onSubmit={this.handleSubmit} className="productForm">
            <div>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="productForm name"
                  type="text"
                  name="name"
                  label="Product"
                  align="center"
                  fullWidth
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Grid>
            </div>
            <div>
              <Grid item xs={12} sm={20}>
                <TextField
                  className="productForm description"
                  type="text"
                  name="description"
                  label="Description"
                  fullWidth
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Grid>
            </div>
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
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    createProduct: product => dispatch(addProduct(product))
  }
}

export default connect(null, mapDispatch)(ProductForm)
