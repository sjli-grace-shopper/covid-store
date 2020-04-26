import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import {fetchProducts} from '../store'
import {ProductDetail} from '.'
import {Breadcrumbs} from '.'

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    if (this.props.products.length > 0) {
      return (
        <Fragment>
          <Breadcrumbs
            name="products"
            location={this.props.location.pathname.split('/')}
          />
          <div className="product-list">
            {this.props.products.map(product => {
              return <ProductDetail key={product.id} product={product} />
            })}
          </div>
        </Fragment>
      )
    } else return null
  }
}

const mapState = state => {
  return {
    products: state.products.productList,
    isAdmin: !!state.user.isAdmin
  }
}
const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}
export default connect(mapState, mapDispatch)(ProductList)
