// Add To Cart Button component
import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'

import {AddCartItemButton, Breadcrumbs, ReviewList} from '.'
// import { getProducts } from '../store/reducers/productReducer';
import {fetchProducts} from '../store'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  }
}))

export const SingleProduct = props => {
  const {user, getProducts, productList} = props
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await getProducts()
      if (Object.keys(productList).length > 0) {
        setProducts(productList)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const classes = useStyles()
  // const rating = product.reviews.length ? product.reviews.reduce((a, c) => a + c) / product.reviews.length : 0;
  // console.log('RATING', rating);
  if (Object.keys(products).length > 0)
    return (
      <Fragment className="single-product">
        <div className={`${classes.root} single-product-row-1`}>
          <Breadcrumbs />
        </div>
        <div className="single-product-row-2">
          <div className="single-product-row-2-left">{product.image}</div>
          <div className="single-product-row-2-right">
            <div className="single-product-row-2-right-row-1">
              {product.name}
            </div>
            <div className="single-product-row-2-right-row-2">
              <div className={classes.root}>
                <Rating
                  name="half-rating-read"
                  value={rating}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <div className="single-product-row-2-right-row-3">
              <AddCartItemButton />
            </div>
            <div className="single-product-row-2-right-row-4">
              {product.description}
            </div>
          </div>
        </div>
        <div className="single-product-row-3">
          <ReviewList rating={rating} product={product} />
        </div>
      </Fragment>
    )
  else return <div>hello</div>
}

const mapState = (state, ownProps) => {
  // 	// const id = +ownProps.match.params.productId;
  // 	// const getProduct = state.products.productList.find(product => product.id === id);
  return {
    productList: state.products.productList,
    // 		product: getProduct,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
