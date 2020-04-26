import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({isAdmin}) => (
  <div className="nav">
    <div className="nav-left">
      <h1>COVID-19 STORE</h1>
    </div>
    <nav className="nav-right">
      <div className="nav-links">
        <Link to="/products">PRODUCTS</Link>
        <Link to="/categories/masks">MASKS</Link>
        <Link to="/categories/gloves">GLOVES</Link>
        <Link to="/categories/sanitizers">SANITIZERS</Link>
        <Link to="/categories/toilet-paper">TOILET PAPER</Link>
        {/* The navbar will show these links to admins */}
        {isAdmin && <hr />}
        {isAdmin && <Link to="/addproduct">ADD PRODUCT</Link>}
        {isAdmin && <Link to="/orders">ORDERS</Link>}
        {isAdmin && <Link to="/users">USERS</Link>}
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
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
