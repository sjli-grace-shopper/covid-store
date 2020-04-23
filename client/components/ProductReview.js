import React from 'react'
import Rating from '@material-ui/lab/Rating'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  }
}))

const ProductReview = props => {
  const {review} = props
  const {rating, reviewText, user, createdAt} = review
  const dateAdded = `${createdAt.slice(5, 7)}/${createdAt.slice(
    8,
    10
  )}/${createdAt.slice(2, 4)}`
  const classes = useStyles()

  return (
    <div className="product-review">
      <div className="product-review-left">
        <div className="product-review-left-row-1">{`${user.firstName} ${
          user.lastName[0]
        }`}</div>
        <div className="product-review-left-row-2">{dateAdded}</div>
      </div>
      <div className="product-review-right">
        <div className="product-review-right-row-1">
          <div className={classes.root}>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
        <div className="product-review-right-row-2">{reviewText}</div>
      </div>
    </div>
  )
}

export default ProductReview
