import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  cart: {},
  isFetching: false
}

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM'
const CLEAR_CART = 'CLEAR_CART'

/**
 * ACTION CREATORS
 */
export const getCart = cart => ({
  type: GET_CART,
  cart
})

export const addToCart = newCart => ({
  type: ADD_TO_CART,
  newCart
})

export const updateCart = newCart => ({
  type: UPDATE_CART,
  newCart
})

export const deleteCartItem = id => ({
  type: DELETE_CART_ITEM,
  id
})

export const clearCart = () => ({
  type: CLEAR_CART
})

/**
 * THUNK CREATORS
 */
export const fetchCart = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    dispatch(getCart(data))
  } catch (err) {
    console.error('Error fetching cart: ', err)
  }
}

export const addCartItem = productData => async dispatch => {
  try {
    const {data} = await axios.post('/api/cart', productData)
    console.log('YES', data)
    dispatch(addToCart(data))
  } catch (err) {
    console.error('Error adding cart item: ', err)
  }
}

export const editCart = changeData => async dispatch => {
  try {
    const {data} = await axios.put('/api/cart', changeData)
    dispatch(updateCart(data))
  } catch (err) {
    console.error('Error updating cart: ', err)
  }
}

export const removeCartItem = productId => async dispatch => {
  try {
    await axios.delete(`/api/cart/${productId}`)
    dispatch(deleteCartItem(productId))
  } catch (err) {
    console.error('Error removing cart item: ', err)
  }
}

export const checkout = () => async dispatch => {
  try {
    await axios.put(`/api/cart/checkout`)
    dispatch(clearCart())
  } catch (err) {
    console.error('Error removing cart item: ', err)
  }
}

/**
 * REDUCER
 */
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, isFetching: true, cart: action.cart}
    case ADD_TO_CART:
      return {
        ...state,
        isFetching: true,
        cart: action.newCart
        // cart: {...state.cart, products: [...state.cart.products, action.item]},
      }
    case UPDATE_CART:
      return {...state, isFetching: true, cart: action.newCart}
    // return {
    //   ...state,
    //   isFetching: true,
    //   cart: {
    //     ...state.cart,
    //     products: state.cart.products.map((product) => {
    //       return product.id === action.item.id ? action.item : product
    //     }),
    //   },
    // }
    case DELETE_CART_ITEM:
      return {
        ...state,
        isFetching: true,
        cart: {
          ...state.cart,
          products: state.cart.products.filter(
            product => product.id !== action.id
          )
        }
      }
    case CLEAR_CART:
      return {...state, isFetching: true, cart: {}}
    default:
      return state
  }
}
