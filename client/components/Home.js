import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import history from '../history'
import {fetchCategories} from '../store'

class Home extends Component {
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
          <div className="home-page">
            <div className="home-page-row-1">
              <img src="/images/banner.png" />
            </div>
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
  categories: state.categories.categoryList
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapState, mapDispatch)(Home)
