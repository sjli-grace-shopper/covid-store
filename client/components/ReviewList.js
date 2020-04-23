import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import Rating from '@material-ui/lab/Rating'
import {makeStyles} from '@material-ui/core/styles'

import {ProductReview} from '.'

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
  const {product, rating} = props
  const classes = useStyles()

  return (
    <div className="review-list">
      <div className="review-list-row-1">
        <div className="review-list-row-1-left">
          <p>REVIEWS</p>
          <div className={classes.root}>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
          <p>
            {product.reviews.length}{' '}
            {product.reviews.length === 1 ? 'review' : 'reviews'}
          </p>
        </div>
        <div className="review-list-row-1-right">
          <Link to="/">Write a review</Link>
        </div>
      </div>
      <div className="review-list-row-2">
        {product.reviews.map(review => (
          <ProductReview key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewList
