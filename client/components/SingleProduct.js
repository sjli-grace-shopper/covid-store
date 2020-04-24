import React, {Component, Fragment, createRef} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import {AddCartItemButton, Breadcrumbs, ReviewList, Rating} from '.'
import {fetchProducts} from '../store'
import {fetchCart, editCart, addCartItem} from '../store/reducers/cartReducer'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

class SingleProduct extends Component {
  constructor() {
    super()
    this.scrollRef = createRef()
  }

  componentDidMount() {
    this.props.getProducts()
    this.props.getCart()
  }

  render() {
    const {product} = this.props
    const executeScroll = () => scrollToRef(this.scrollRef)

    if (product) {
      const rating = product.reviews.length
        ? +(
            product.reviews.reduce((a, c) => {
              return a + c.rating
            }, 0) / product.reviews.length
          )
        : 0

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
                  <h1>{product.name}</h1>
                </div>
                <div className="single-product-row-2-right-row-2">
                  <Rating
                    product={product}
                    rating={rating}
                    executeScroll={executeScroll}
                  />
                </div>
                <div className="single-product-row-2-right-row-3">
                  <AddCartItemButton product={product} />
                </div>
                <div className="single-product-row-2-right-row-4">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="single-product-row-3">
              <ReviewList
                refProp={this.scrollRef}
                rating={rating}
                product={product}
              />
            </div>
          </div>
        </Fragment>
      )
    } else return null
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
  getProducts: () => dispatch(fetchProducts()),
  getCart: () => dispatch(fetchCart())
})

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
