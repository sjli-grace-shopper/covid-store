import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Divider from '@material-ui/core/divider'

import history from '../history'
import {fetchCategories, fetchProducts} from '../store'
import {Slider} from '.'

class Home extends Component {
  componentDidMount() {
    this.props.getCategories()
    this.props.getProducts()
  }
  render() {
    const handleClick = evt => {
      history.push(`/categories/${evt}`)
    }
    if (this.props.categories.length) {
      return (
        <Fragment>
          <div className="home-page">
            <div className="home-page-row-1">
              <img src="/images/banner.png" />
            </div>
            <Divider id="home-divider-1" />
            <div className="home-page-row-slider">
              <h3>FEATURED PRODUCTS</h3>
              <Slider products={this.props.products} />
            </div>
            <Divider />
            <div className="home-page-row-2">
              {this.props.categories.map((cat, i) => {
                return (
                  <div
                    key={cat.id}
                    className={`home-page-row-2-box-${i + 1}`}
                    onClick={() => handleClick(cat.name)}
                  >
                    <img src={`/images/${cat.name}.png`} />
                    <h2>
                      {cat.name === 'toilet-paper'
                        ? 'Toilet Paper'
                        : `${cat.name
                            .slice(0, 1)
                            .toUpperCase()}${cat.name.slice(1)}`}
                    </h2>
                  </div>
                )
              })}
            </div>
          </div>
        </Fragment>
      )
    } else return null
  }
}

const mapState = state => ({
  categories: state.categories.categoryList,
  products: state.products.productList
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(Home)
