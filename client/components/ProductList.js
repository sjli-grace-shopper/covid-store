// Products component
// mapState - state.user, state.products.list.filter(by category), category(from URL?)
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/reducers/productReducer'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function NestedGrid() {
  const classes = useStyles()

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    )
  }
}

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    console.log('PROPS', this.props)
    return (
      <div className="productList">
        {this.props.products.map(product => {
          return (
            <React.Fragment key={product.id}>
              <Grid item xs={4}>
                <div className="product">
                  <Link to={`/products/${product.id}`}>
                    <img className="product-img" src={product.imageUrl} />
                    <h3>{product.name}</h3>
                  </Link>
                  <p>$ {product.price} USD</p>
                </div>
              </Grid>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.productList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
