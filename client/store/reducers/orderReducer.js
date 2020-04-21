import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  orderList: [],
  isFetching: false
}

/**
 * ACTION TYPES
 */
const GET_PENDING_ORDERS = 'GET_PENDING_ORDERS'

/**
 * ACTION CREATORS
 */
export const getPendingOrders = () => {}

/**
 * THUNK CREATORS
 */
export const fetchPendingOrders = () => async dispatch => {}

/**
 * REDUCER
 */
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
