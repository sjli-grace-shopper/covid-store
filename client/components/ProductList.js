import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import {fetchProducts} from '../store'
import history from '../history'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const handleClick = id => {
      history.push(`/products/${id}/editproduct`)
    }

    if (this.props.products.length > 0) {
      return (
        <div className="product-list">
          {this.props.products.map(product => {
            return (
              <Fragment key={product.id}>
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
                    {this.props.isAdmin && (
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
              </Fragment>
            )
          })}
        </div>
      )
    } else return null
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.productList,
    isAdmin: !!state.user.isAdmin
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
