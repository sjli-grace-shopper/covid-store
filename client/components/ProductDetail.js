import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const ProductDetail = props => {
  const {product, isAdmin} = props
  const handleClick = id => {
    history.push(`/products/${id}/editproduct`)
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
          <Button
            type="button"
            variant="contained"
            onClick={() => handleClick(product.id)}
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  )
}

const mapState = state => ({
  isAdmin: !!state.user.isAdmin
})

export default connect(mapState)(ProductDetail)
