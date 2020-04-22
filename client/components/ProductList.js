// Products component
// mapState - state.user, state.products.list.filter(by category), category(from URL?)
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AllProducts = props => {
  return (
    <div className="allProducts">
      {props.products.map(product => {
        return (
          <div key={product.id} className="product">
            <Link to={`/products/${product.id}`}>
              <img className="product-img" src={product.imageUrl} />
              <h3>{product.name}</h3>
            </Link>
            <p>{product.price} USD</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.productList
  }
}

export default connect(mapStateToProps)(AllProducts)
