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
  const classes = useStyles()
  const {name, location} = props

  const formattedLocation = location.map(
    el => `${el.slice(0, 1).toUpperCase()}${el.slice(1)}`
  )
  const formattedName = name
    .split('[-\\s]')
    .map(el => `${el.slice(0, 1).toUpperCase()}${el.slice(1)}`)
    .join(' ')
  console.log(location, formattedLocation)

  if (name)
    return (
      <div className={`breadcrumbs ${classes.root}`}>
        <MUIBreadcrumbs separator="›" aria-label="breadcrumb">
          <a onClick={() => handleClick('')}>Home</a>
          {location.length > 2 && (
            <a onClick={() => handleClick(`${location[1]}`)}>
              {formattedLocation[1]}
            </a>
          )}
          <Typography>{formattedName}</Typography>
        </MUIBreadcrumbs>
      </div>
    )
  else return null
}

export default Breadcrumbs
