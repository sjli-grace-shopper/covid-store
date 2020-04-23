import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {logout} from '../store'
import ProductList from './ProductList'
import Cart from './Cart'
import ProductForm from './ProductForm'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>COVID-19 STORE</h1>
    <Router>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            Welcome to the COVID-19 Store
          </Route>{' '}
          />
          <Route exact path="/products" component={ProductList} />
          {/* <Route path="/cart" component={Cart} /> */}
          <Route exact path="/productform" component={ProductForm} />
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </main>
      <hr />
    </Router>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
