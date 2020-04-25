import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialState = {
  categoryList: [],
  isFetching: false
}

/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'

/**
 * ACTION CREATORS
 */
export const getCategories = categories => ({type: GET_CATEGORIES, categories})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/categories')
    dispatch(getCategories(data))
  } catch (err) {
    console.error('Error fetching cart: ', err)
  }
}

/**
 * REDUCER
 */
export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, isFetching: true, categoryList: action.categories}
    default:
      return state
  }
}
