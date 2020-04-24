import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/divider'
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
    <div ref={props.refProp} className="review-list">
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
          <Link to="/">Write a review</Link>
        </div>
      </div>
      <Divider />
      <div className="review-list-row-3">
        {product.reviews.map(review => (
          <Fragment>
            <ProductReview key={review.id} review={review} />
            <Divider />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default ReviewList
