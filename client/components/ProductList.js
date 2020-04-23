// Products component
// mapState - state.user, state.products.list.filter(by category), category(from URL?)
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/reducers/productReducer'

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
            <div key={product.id} className="product">
              <Link to={`/products/${product.id}`}>
                <img className="product-img" src={product.imageUrl} />
                <h3>{product.name}</h3>
              </Link>
              <p>{product.price} USD</p>
            </div>
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
