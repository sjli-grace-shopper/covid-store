import React from 'react'
import Rating from '@material-ui/lab/Rating'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const Ratings = props => {
  const classes = useStyles()
  const {product, rating} = props
  console.log('RATING', product)

  const reviews = product.reviews

  console.log('RATING', rating)

  return (
    <div className={classes.root}>
      <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
      <p>
        {product.reviews.length}{' '}
        {product.reviews.length === 1 ? 'review' : 'reviews'}
      </p>
    </div>
  )
}

export default Ratings
