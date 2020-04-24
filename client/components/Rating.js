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
  const {product, rating, executeScroll} = props
  console.log('PROD', product)

  console.log('RATING', rating)

  return (
    <div className={classes.root}>
      <MUIRating
        name="half-rating-read"
        value={rating}
        precision={0.5}
        onClick={executeScroll}
        readOnly
      />
      <p onClick={executeScroll}>
        {product.reviews.length}{' '}
        {product.reviews.length === 1 ? 'review' : 'reviews'}
      </p>
    </div>
  )
}

export default Rating
