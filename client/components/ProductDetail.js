import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import history from '../history'
import {removeProduct} from '../store'

const ProductDetail = props => {
  const {deleteProduct, isAdmin, product} = props

  const handleEditClick = id => {
    history.push(`/products/${id}/editproduct`)
  }

  const handleDeleteClick = id => {
    deleteProduct(id)
  }

  return (
    <div className="product-list-product">
      <div className="product-list-row-1">
        <Link to={`/products/${product.id}`}>
          <img className="product-img" src={product.imageUrl} />
        </Link>
      </div>
      <div className="product-list-row-2">
        <Link to={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
      </div>
      <div className="product-list-row-3">
        <p>$ {product.price} USD</p>
        {isAdmin && (
          <div className="product-list-row-3-btns">
            <Button
              type="button"
              className="edit"
              variant="contained"
              onClick={() => handleEditClick(product.id)}
            >
              Edit
            </Button>
            <Button
              type="button"
              className="delete"
              variant="contained"
              onClick={() => handleDeleteClick(product.id)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

const mapState = state => ({
  isAdmin: !!state.user.isAdmin
})

const mapDispatch = (dispatch, ownProps) => ({
  deleteProduct: id => dispatch(removeProduct(id, ownProps))
})

export default withRouter(connect(mapState, mapDispatch)(ProductDetail))
