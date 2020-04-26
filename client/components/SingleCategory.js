import React, {Component} from 'react'
import {connect} from 'react-redux'
import Divider from '@material-ui/core/divider'

import {fetchProducts, fetchCategories} from '../store'
import {Breadcrumbs, ProductDetail} from '.'

class SingleCategory extends Component {
  componentDidMount() {
    this.props.getProducts()
    this.props.getCategories()
  }

  render() {
    const {categories, products} = this.props

    if (products.length && categories.length) {
      const category = categories.find(
        cat => cat.name === this.props.match.params.categoryName
      )

      const name = `${category.name
        .split('-')
        .map(el => `${el.slice(0, 1).toUpperCase()}${el.slice(1)}`)
        .join(' ')}`

      return (
        <div className="single-category">
          <Breadcrumbs
            name={category.name}
            location={this.props.location.pathname.split('/')}
          />
          <Divider />
          <div className="single-category-row-1">
            <h2>{name}</h2>
          </div>
          <Divider />
          <div className="single-category-products">
            {products.reduce((a, product) => {
              if (product.categoryId === category.id) {
                const catEl = (
                  <ProductDetail key={product.id} product={product} />
                )
                a.push(catEl)
              }
              return a
            }, [])}
          </div>
        </div>
      )
    } else return null
  }
}

const mapState = state => ({
  products: state.products.productList,
  categories: state.categories.categoryList
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapState, mapDispatch)(SingleCategory)
