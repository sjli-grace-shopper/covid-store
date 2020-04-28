import React from 'react'
import {Rating as MUIRating} from '@material-ui/lab'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const Rating = props => {
  const classes = useStyles()
  const {product} = props
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
    <div className={classes.root}>
      <MUIRating
        name="half-rating-read"
        value={rating}
        precision={0.5}
        readOnly
      />
      <p>
        {product.reviews.length}{' '}
        {product.reviews.length === 1 ? 'review' : 'reviews'}
      </p>
    </div>
  )
}

export default Rating
