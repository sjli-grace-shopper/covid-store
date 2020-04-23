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
export const createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}
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

export function addProduct(product) {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/products', product)
      dispatch(createProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const editProduct = () => async dispatch => {}
export const addReview = () => async dispatch => {}

/**
 * REDUCER
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, productList: action.products, isFetching: true}
    case CREATE_PRODUCT:
      return {...state, productList: action.product, isFetching: false}
    default:
      return state
  }
}
