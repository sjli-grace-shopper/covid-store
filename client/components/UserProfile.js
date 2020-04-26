import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Paper, Button} from '@material-ui/core'
import Orders from './Order'

const UserProfile = props => {
  const {user} = props

  return (
    <div>
      <div>
        <React.Fragment>
          <Grid container alignItems="flex-start" spacing={2}>
            <div style={{padding: 20, margin: 'auto', maxWidth: 800}}>
              <CssBaseline />
              <Typography
                variant="h4"
                align="center"
                component="h1"
                gutterBottom
              >
                Account Info
              </Typography>
              <div>
                Name: {user.firstName} {user.lastName}
              </div>
              <div>Email: {user.email}</div>
              <div>Address: {user.address}</div>
              <div>
                <Link to="/updateprofile">Update Profile</Link>
              </div>
            </div>
          </Grid>
        </React.Fragment>
        <Orders />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserProfile)
