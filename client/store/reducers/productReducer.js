import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  productList: [],
  isFetching: false
}

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const CREATE_REVIEW = 'CREATE_REVIEW'

/**
 * ACTION CREATORS
 */

export const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}
export const createProduct = () => {}
export const updateProduct = () => {}
export const createReview = () => {}

/**
 * THUNK CREATORS
 */
export function fetchProducts() {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products`)
      dispatch(getProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const addProduct = () => async dispatch => {}
export const editProduct = () => async dispatch => {}
export const addReview = () => async dispatch => {}

/**
 * REDUCER
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, productList: action.products, isFetching: true}
    default:
      return state
  }
}
