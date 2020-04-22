import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  allProducts: [],
  singleProduct: {},
  isFetching: false
}

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
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
export const getProduct = product => {
  return {
    type: GET_PRODUCT,
    product
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
      const {data} = await axios.get(`/api/`)
      dispatch(getProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export function fetchProduct(productId) {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/${productId}`)
      dispatch(getProduct(data))
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
      return {...state, allProducts: state.allProducts.concat(action.products)}
    case GET_PRODUCT: {
      const newSingProduct = {...state, singleProduct: action.product}
      return newSingProduct
    }
    default:
      return state
  }
}
