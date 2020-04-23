import React, {Component, Fragment} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import {AddCartItemButton, Breadcrumbs, ReviewList, Ratings} from '.'
import {fetchProducts} from '../store'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    console.log('ISD', this.props.id)

    const {product} = this.props
    const rating = 5
    // const rating = product.reviews.length
    // 	? product.reviews.reduce((a, c) => {
    // 			return a + c;
    // 		}, 0) / product.reviews.length
    // 	: 0;

    console.log('PRODUCT', this.props.product)

    if (product)
      return (
        <Fragment>
          <div className="single-product">
            <div className="single-product-row-1">
              <Breadcrumbs product={product} />
            </div>
            <div className="single-product-row-2">
              <div className="single-product-row-2-left">
                <img src={product.imageUrl} />
              </div>
              <div className="single-product-row-2-right">
                <div className="single-product-row-2-right-row-1">
                  {product.name}
                </div>
                <div className="single-product-row-2-right-row-2">
                  <Ratings product={product} rating={rating} />
                </div>
                <div className="single-product-row-2-right-row-3">
                  <AddCartItemButton />
                </div>
                <div className="single-product-row-2-right-row-4">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="single-product-row-3">
              <ReviewList rating={rating} product={product} />
            </div>
          </div>
        </Fragment>
      )
    else return null
  }
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.productId
  const getProducts = state.products.productList.find(
    product => product.id === id
  )
  return {
    id: id,
    product: getProducts,
    products: state.products.productList
  }
}

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
