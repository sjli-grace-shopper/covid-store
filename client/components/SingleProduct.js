import React, {Component, Fragment, createRef} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Divider from '@material-ui/core/divider'
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
    this.handleAddReviewClick = this.handleAddReviewClick.bind(this)
    this.handleCancelAddReviewClick = this.handleCancelAddReviewClick.bind(this)
  }

  async componentDidMount() {
    const productId = +this.props.match.params.productId
    const {data} = await axios.get(`/api/products/${productId}`)
    this.setState({product: data})
    this.props.getCart()
  }

  handleSubmit() {
    this.setState({showReviewForm: false})
  }

  handleAddReviewClick() {
    this.setState({showReviewForm: true})
  }

  handleCancelAddReviewClick(evt) {
    evt.preventDefault()
    this.setState({showReviewForm: false})
  }

  render() {
    const product = this.state.product
    const location = this.props.location.pathname
      .split('/')
      .slice(1)
      .map(el => (el = el.slice(0, 1).toUpperCase() + el.slice(1)))
    if (Object.keys(product).length > 0) {
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
                product={product}
                location={this.props.location.pathname.split('/')}
                formattedLocation={location}
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
                handleCancel={this.handleCancelAddReviewClick}
                handleClick={this.handleAddReviewClick}
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

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    products: state.products.productList
  }
}

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  getCart: () => dispatch(fetchCart()),
  postReview: (id, review) => dispatch(addReview(id, review))
})

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
