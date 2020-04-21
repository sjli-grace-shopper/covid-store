import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user'
import accountReducer from './reducers/accountReducer'
import cartReducer from './reducers/cartReducer'
import orderReducer from './reducers/orderReducer'
import productReducer from './reducers/productReducer'

const reducer = combineReducers({
  user,
  account: accountReducer,
  cart: cartReducer,
  orders: orderReducer,
  products: productReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './reducers/accountReducer'
export * from './reducers/cartReducer'
export * from './reducers/orderReducer'
export * from './reducers/productReducer'
