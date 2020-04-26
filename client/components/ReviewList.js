import React, {Fragment} from 'react'
import Divider from '@material-ui/core/divider'
import Rating from '@material-ui/lab/Rating'
import {makeStyles} from '@material-ui/core/styles'

import {AddReview, ProductReview} from '.'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  }
}))

const ReviewList = props => {
  const {
    handleCancel,
    handleClick,
    handleSubmit,
    isLoggedIn,
    product,
    rating,
    showReviewForm
  } = props
  const classes = useStyles()

  return (
    <div className="review-list">
      <div className="review-list-row-1">
        <h2>{`Reviews (${product.reviews.length})`}</h2>
      </div>
      <Divider />
      <div className="review-list-row-2">
        <div className="review-list-row-2-left">
          <div className={classes.root}>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
          <p>
            <b>{rating}</b> out of 5 stars
          </p>
        </div>
        <div className="review-list-row-2-right">
          {isLoggedIn && <a onClick={handleClick}>Write a review</a>}
        </div>
      </div>
      <Divider />
      {showReviewForm && (
        <div className="single-product-row-add-review">
          <AddReview
            product={product}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
          />
          <Divider />
        </div>
      )}
      <div className="review-list-row-3">
        {product.reviews.map((review, i) => (
          <Fragment key={review.id}>
            <ProductReview {...review} />
            <Divider />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default ReviewList
