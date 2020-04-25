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

export const getProducts = products => ({type: GET_PRODUCTS, products})
export const createProduct = product => ({type: CREATE_PRODUCT, product})
export const updateProduct = product => ({type: UPDATE_PRODUCT, product})
export const createReview = (id, review) => ({type: CREATE_REVIEW, id, review})

/**
 * THUNK CREATORS
 */
export function fetchProducts() {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products`)
      dispatch(getProducts(data))
    } catch (err) {
      console.error('Error fetching products: ', err)
    }
  }
}

export function addProduct(product, ownProps) {
  return async dispatch => {
    try {
      console.log('AXIOS', product)
      const {data} = await axios.post('/api/products', product)
      dispatch(createProduct(data))
      console.log('AXIOS SUCCESS', data)
      ownProps.history.push(`/products/${data.id}`)
    } catch (err) {
      console.error('Error adding product: ', err)
    }
  }
}

export const editProduct = (id, product, ownProps) => async dispatch => {
  try {
    console.log('AXIOS', id, product)
    const {data} = await axios.put(`/api/products/${id}`, product)
    dispatch(updateProduct(data))
    console.log('AXIOS SUCCESS', data)
    ownProps.history.push(`/products/${data.id}`)
  } catch (err) {
    console.error('Error editing product: ', err)
  }
}

export const addReview = (id, review) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/products/${id}/review`, review)
    dispatch(createReview(id, data))
  } catch (err) {
    console.error('Error adding review: ', err)
  }
}

/**
 * REDUCER
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, productList: action.products, isFetching: true}
    case CREATE_PRODUCT:
      return {...state, productList: action.product, isFetching: true}
    case UPDATE_PRODUCT:
      return {
        ...state,
        productList: state.productList.map(item =>
          item.id === action.product.id ? action.product : item
        ),
        isFetching: true
      }
    case CREATE_REVIEW:
      return {
        ...state,
        productList: state.productList.map(item => {
          if (item.id === action.id) {
            return {...item, reviews: [...item.reviews, action.review]}
          } else return item
        }),
        isFetching: true
      }
    default:
      return state
  }
}
