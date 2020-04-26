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
  history.push(`/${evt}`)
}

const Breadcrumbs = props => {
  const {product, formattedLocation, location} = props
  console.log(formattedLocation)
  console.log(location)
  console.log(product)

  const classes = useStyles()
  if (product.id)
    return (
      <div className={`breadcrumbs ${classes.root}`}>
        <MUIBreadcrumbs separator="›" aria-label="breadcrumb">
          <a onClick={() => handleClick('home')}>Home</a>
          <a onClick={() => handleClick(`${location[1]}`)}>
            {formattedLocation[0]}
          </a>
          <Typography>{product.name}</Typography>
        </MUIBreadcrumbs>
      </div>
    )
  else return null
}

export default Breadcrumbs
