import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  details: {},
  isFetching: false
}

/**
 * ACTION TYPES
 */
const GET_ACCOUNT = 'GET_ACCOUNT'
const CLEAR_ACCOUNT = 'CLEAR_ACCOUNT'
const ADD_ORDER = 'ADD_ORDER'

/**
 * ACTION CREATORS
 */
export const getAccount = () => {}
export const clearAccount = () => {}
export const addOrder = () => {}

/**
 * THUNK CREATORS
 */
export const fetchAccount = () => async dispatch => {}

export const addNewOrder = () => async dispatch => {}

/**
 * REDUCER
 */
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
