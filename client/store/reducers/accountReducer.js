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
export const getAccount = account => ({
  type: GET_ACCOUNT,
  account
})
export const clearAccount = () => {}
export const addOrder = () => {}

/**
 * THUNK CREATORS
 */
export const fetchAccount = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users/account')
    dispatch(getAccount(data))
  } catch (err) {
    console.error('Error fetching account: ', err)
  }
}

export const addNewOrder = () => async dispatch => {}

/**
 * REDUCER
 */
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return {details: action.account, isFetching: true}
    default:
      return state
  }
}
