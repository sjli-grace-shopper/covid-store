import React, {useState} from 'react'
import {connect} from 'react-redux'
import Rating from '@material-ui/lab/Rating'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {addReview} from '../store'

const AddReview = props => {
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const {handleCancel, handleSubmit, product, postReview} = props

  const handleAddReview = evt => {
    evt.preventDefault()
    postReview(product.id, {rating, reviewText})
    setRating(0)
    setReviewText('')
    handleSubmit()
  }

  return (
    <div className="add-review">
      <form onSubmit={handleAddReview}>
        <div className="add-review-row-1">
          <Rating
            required
            name="hover"
            value={rating}
            precision={0.5}
            onChange={evt => setRating(+evt.target.value)}
          />
        </div>
        <div className="add-review-row-2">
          <label>Review</label>
          <TextField
            required
            id="review-review"
            label="Tell us what you think"
            value={reviewText}
            onChange={evt => setReviewText(evt.target.value)}
            variant="outlined"
          />
        </div>
        <div className="add-review-row-3">
          <Button className="add-button" variant="outlined" type="submit">
            Submit Review
          </Button>
          <a onClick={handleCancel}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

const mapDispatch = dispatch => ({
  postReview: (id, review) => dispatch(addReview(id, review))
})

export default connect(null, mapDispatch)(AddReview)
