import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import MUIBreadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'

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
  history.push(`/${evt}`)
}

const Breadcrumbs = props => {
  const {product} = props
  const classes = useStyles()

  if (product.id)
    return (
      <div className={classes.root}>
        <MUIBreadcrumbs separator="›" aria-label="breadcrumb">
          <Link onClick={() => handleClick('home')}>Home</Link>
          <Link onClick={() => handleClick('products')}>Products</Link>
          <Typography>{product.name}</Typography>
        </MUIBreadcrumbs>
      </div>
    )
  else return null
}

export default Breadcrumbs
