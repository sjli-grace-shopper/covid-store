// Add To Cart Button component
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import AddCartItemButton from './AddCartItemButton'
import {addCartItem} from '../store/reducers/cartReducer'
import history from '../history'

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const handleClick = evt => {
  evt.preventDefault()
  // history.push(`/categories/${}`)
  // history.push('/products')
}

export const SingleProduct = props => {
  const {product, user} = props
  const classes = useStyles()

  if (product.id)
    return (
      <div className={classes.root}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
          >
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </div>
    )
  else return null
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.productId
  const getProduct = state.products.productList.find(
    product => product.id === id
  )
  return {
    product: getProduct,
    user: state.user
  }
}

export default connect(mapState)(SingleProduct)
