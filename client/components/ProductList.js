import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import {fetchCategories, fetchProducts} from '../store'
import {Breadcrumbs, FilterBar, ProductDetail} from '.'

import Pagination from '@material-ui/lab/Pagination'
import Divider from '@material-ui/core/divider'

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategories: [],
      currPage: 1
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  componentDidMount() {
    this.props.getProducts()
    this.props.getCategories()
  }

  handleCategoryClick(evt, cat) {
    evt.preventDefault()
    let selectedCategories
    const selCat = this.state.selectedCategories
    if (selCat.length < 1) {
      selectedCategories = [cat]
    } else {
      selectedCategories = selCat.includes(cat)
        ? selCat.length === 1
          ? []
          : selCat.filter(el => el !== cat)
        : [...selCat, cat]
    }
    this.setState({selectedCategories})
  }

  handlePageClick(evt, page) {
    console.log('clicked', page)
    this.setState({currPage: page})
  }

  render() {
    const selCat = this.state.selectedCategories
    if (this.props.products.length > 0) {
      const products =
        selCat.length < 1
          ? this.props.products
          : this.props.products.filter(el => selCat.includes(el.categoryId))

      const productsArr = products.slice()
      const pageArr = []
      while (productsArr.length) {
        pageArr.push(productsArr.splice(0, 16))
      }

      return (
        <Fragment>
          <div className="products-breadcrumbs">
            <Breadcrumbs
              name="products"
              location={this.props.location.pathname.split('/')}
            />
            <small>{`${products.length} products`}</small>
          </div>
          <div className="products-filter-bar">
            <FilterBar
              categories={this.props.categories}
              handleClick={this.handleCategoryClick}
              selectedCats={this.state.selectedCategories}
            />
          </div>
          <div className="product-list">
            {pageArr[this.state.currPage - 1].map(product => (
              <ProductDetail
                key={product.id}
                routeProps={this.props.routeProps}
                product={product}
              />
            ))}
          </div>
          <Divider />
          <div className="product-list-pagination">
            <Pagination
              count={10}
              onChange={(evt, page) => this.handlePageClick(evt, page)}
            />
          </div>
        </Fragment>
      )
    } else return null
  }
}

const mapState = state => ({
  categories: state.categories.categoryList,
  products: state.products.productList,
  isAdmin: !!state.user.isAdmin
})
const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    getCategories: () => dispatch(fetchCategories())
  }
}
export default connect(mapState, mapDispatch)(ProductList)
