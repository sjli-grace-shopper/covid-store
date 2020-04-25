// mapState - state.categories (to select category)
import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store/reducers/productReducer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import {
  Paper,
  Button,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel
} from '@material-ui/core'

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
        <Grid container alignItems="flex-start" spacing={2}>
          <div style={{padding: 20, margin: 'auto', maxWidth: 600}}>
            <CssBaseline />
            <Paper style={{padding: 5}}>
              <Typography
                variant="h4"
                align="center"
                component="h1"
                gutterBottom
              >
                New Product Form
              </Typography>
              <form onSubmit={this.handleSubmit} className="productForm">
                <div>
                  <Grid item xs={6}>
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
                  <Grid item xs={12}>
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
                <div>
                  <Grid item xs={6}>
                    <TextField
                      className="productForm price"
                      type="double"
                      name="price"
                      label="Price"
                      fullWidth
                      value={this.state.price}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item xs={12}>
                    <TextField
                      className="productForm imgUrl"
                      type="text"
                      name="imageUrl"
                      label="URL"
                      fullWidth
                      value={this.state.imageUrl}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item xs={6}>
                    <TextField
                      className="productForm quantity"
                      type="integer"
                      name="quantity"
                      label="Quantity"
                      fullWidth
                      value={this.state.quantity}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item xs={6}>
                    <TextField
                      className="productForm category"
                      type="integer"
                      name="category"
                      label="Category"
                      fullWidth
                      value={this.state.category}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item style={{marginTop: 16}}>
                    <Button variant="contained" type="submit" value="Submit">
                      Submit
                    </Button>
                  </Grid>
                </div>
              </form>
            </Paper>
          </div>
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
