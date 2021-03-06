import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {me} from './store'
import {
  AddProduct,
  Cart,
  Categories,
  EditProduct,
  Home,
  Login,
  NotFound,
  OrderItem,
  Order,
  OrderList,
  ProductList,
  Signup,
  SingleCategory,
  SingleProduct,
  Users,
  UserHome,
  ProductForm,
  Search,
  Checkout,
  UserProfile,
  UpdateUser,
  OrderReceipt
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/cart/checkout" component={Checkout} />
        <Route
          exact
          path="/products"
          render={routeProps => <ProductList {...routeProps} />}
        />
        <Route exact path="/categories" component={Categories} />
        <Route
          exact
          path="/categories/:categoryName"
          component={SingleCategory}
        />
        <Route
          exact
          path="/products/:productId"
          render={routeProps => <SingleProduct routeProps={routeProps} />}
        />
        <Route
          exact
          path="/search"
          render={routeProps => <Search routeProps={routeProps} />}
        />
        <Route
          exact
          path="/search/:query"
          render={routeProps => <Search routeProps={routeProps} />}
        />
        <Route exact path="/" component={Home} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/orders" component={OrderList} />
            <Route exact path="/orders/:id" component={OrderItem} />
            <Route exact path="/orders/receipt/:id" component={OrderReceipt} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/updateprofile" component={UpdateUser} />
            {isAdmin && (
              <Switch>
                <Route exact path="/addproduct" component={AddProduct} />
                <Route
                  exact
                  path="/products/:productId/editproduct"
                  component={EditProduct}
                />
                <Route exact path="/users" component={Users} />
              </Switch>
            )}
          </Switch>
        )}
        {/* Displays our Login component as a fallback; we'll switch to Home once it's ready */}
        <Route component={NotFound} />
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
