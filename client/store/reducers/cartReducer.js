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
export const getCart = () => {}
export const updateCart = () => {}
export const deleteCartItem = () => {}
export const clearCart = () => {}

/**
 * THUNK CREATORS
 */
export const fetchCart = () => async dispatch => {}
export const addCartItem = () => async dispatch => {}
export const editCart = () => async dispatch => {}
export const removeCartItem = () => async dispatch => {}

/**
 * REDUCER
 */
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
