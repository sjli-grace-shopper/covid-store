import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import history from '../history'
import {fetchCategories} from '../store'
import {Breadcrumbs} from '.'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const handleClick = evt => {
      history.push(`/categories/${evt}`)
    }

    if (this.props.categories.length) {
      return (
        <Fragment>
          <Breadcrumbs
            name="categories"
            location={this.props.location.pathname.split('/')}
          />

          <div className="categories">
            {this.props.categories.map((cat, i) => {
              return (
                <div
                  key={cat.id}
                  className={`categories-box-${i + 1}`}
                  onClick={() => handleClick(cat.name)}
                >
                  <img src={`/images/${cat.name}.png`} />
                  <h2>
                    {cat.name === 'toilet-paper'
                      ? 'Toilet Paper'
                      : `${cat.name.slice(0, 1).toUpperCase()}${cat.name.slice(
                          1
                        )}`}
                  </h2>
                </div>
              )
            })}
          </div>
        </Fragment>
      )
    } else return null
  }
}

const mapState = state => ({
  categories: state.categories.categoryList
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapState, mapDispatch)(Categories)
