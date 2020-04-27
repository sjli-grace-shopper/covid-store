import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import {AddCartItemButton, Breadcrumbs, ReviewList, Rating} from '.'
import {addReview, fetchProducts, fetchCart} from '../store'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      product: {},
      showReviewForm: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReviewFormClick = this.handleReviewFormClick.bind(this)
    this.handleCancelReviewFormClick = this.handleCancelReviewFormClick.bind(
      this
    )
  }

  async componentDidMount() {
    const productId = +this.props.match.params.productId
    const {data} = await axios.get(`/api/products/${productId}`)
    this.setState({product: data})
    this.props.getCart()
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({showReviewForm: false})
    this.props.getProducts()
    this.setState({product: this.props.stateProduct})
  }

  handleReviewFormClick() {
    this.setState({showReviewForm: true})
  }

  handleCancelReviewFormClick(evt) {
    evt.preventDefault()
    this.setState({showReviewForm: false})
  }

  render() {
    const product = this.state.product
      ? this.state.product
      : this.props.stateProduct

    if (product && product.reviews) {
      const rating = product.reviews.length
        ? +(
            Math.round(
              (product.reviews.reduce((a, c) => {
                return a + c.rating
              }, 0) /
                product.reviews.length) *
                2
            ) / 2
          )
        : 0

      return (
        <Fragment>
          <div className="single-product">
            <div className="single-product-row-1">
              <Breadcrumbs
                name={product.name}
                location={this.props.location.pathname.split('/')}
              />
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
                  <Rating product={product} rating={rating} />
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
                ownProps={this.props}
                handleCancel={this.handleCancelReviewFormClick}
                handleClick={this.handleReviewFormClick}
                handleSubmit={this.handleSubmit}
                isLoggedIn={this.props.isLoggedIn}
                product={product}
                rating={rating}
                showReviewForm={this.state.showReviewForm}
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
  const getProduct =
    state.products.productList.length &&
    state.products.productList.find(prod => prod.id === id)
  return {
    isLoggedIn: !!state.user.id,
    products: state.products.productList,
    stateProduct: getProduct
  }
}

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  getCart: () => dispatch(fetchCart()),
  postReview: (id, review) => dispatch(addReview(id, review))
})

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
