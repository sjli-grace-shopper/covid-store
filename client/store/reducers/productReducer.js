import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  productList: {},
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

export const getProducts = () => {}
export const createProduct = () => {}
export const updateProduct = () => {}
export const createReview = () => {}

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {}
export const addProduct = () => async dispatch => {}
export const editProduct = () => async dispatch => {}
export const addReview = () => async dispatch => {}

/**
 * REDUCER
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
