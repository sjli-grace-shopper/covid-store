import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import {
  AddCartItemButton,
  Breadcrumbs,
  ReviewList,
  Rating,
  CartPreview
} from '.'
import {addReview, fetchProducts, fetchCart} from '../store'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      product: {},
      showReviewForm: false,
      showCartPreview: false,
      showFavoritePreview: false,
      favorited: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReviewFormClick = this.handleReviewFormClick.bind(this)
    this.handleCancelReviewClick = this.handleCancelReviewClick.bind(this)
    this.handleAddCartClick = this.handleAddCartClick.bind(this)
    this.handleCloseCartClick = this.handleCloseCartClick.bind(this)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleUnfavoriteClick = this.handleUnfavoriteClick.bind(this)
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

  handleCancelReviewClick(evt) {
    evt.preventDefault()
    this.setState({showReviewForm: false})
  }

  handleAddCartClick() {
    this.setState({showCartPreview: true})
  }

  handleCloseCartClick() {
    this.setState({showCartPreview: false})
  }

  handleFavoriteClick() {
    this.setState({showFavoritePreview: true, favorited: true})
  }

  handleUnfavoriteClick() {
    this.setState({favorited: false})
  }

  render() {
    const product = this.state.product
      ? this.state.product
      : this.props.stateProduct

    if (product && product.reviews) {
      return (
        <Fragment>
          <div className="single-product">
            <CartPreview
              open={this.state.showCartPreview}
              handleCloseCartClick={this.handleCloseCartClick}
            />
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
                  <Rating product={product} />
                  {this.props.isLoggedIn &&
                    (this.state.favorited ? (
                      <FavoriteIcon
                        className="favorite-filled"
                        onClick={this.handleUnfavoriteClick}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className="favorite-unfilled"
                        onClick={this.handleFavoriteClick}
                      />
                    ))}
                </div>
                <div className="single-product-row-2-right-row-3">
                  <AddCartItemButton
                    product={product}
                    handleOpenCartClick={this.handleAddCartClick}
                  />
                </div>
                <div className="single-product-row-2-right-row-4">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="single-product-row-3">
              <ReviewList
                ownProps={this.props}
                handleCancel={this.handleCancelReviewClick}
                handleClick={this.handleReviewFormClick}
                handleSubmit={this.handleSubmit}
                isLoggedIn={this.props.isLoggedIn}
                product={product}
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
