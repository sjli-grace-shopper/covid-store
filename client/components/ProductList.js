// Products component
// mapState - state.user, state.products.list.filter(by category), category(from URL?)
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/reducers/productReducer'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

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
              <div className="productList-product">
                <Link to={`/products/${product.id}`}>
                  <img className="product-img" src={product.imageUrl} />
                  <h3>{product.name}</h3>
                </Link>
                <p>$ {product.price} USD</p>
              </div>
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
