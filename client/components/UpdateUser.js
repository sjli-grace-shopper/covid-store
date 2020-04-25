import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUserProfile} from '../store/user'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'

import {Paper, Button} from '@material-ui/core'

class UpdateProfile extends Component {
  constructor(props) {
    super(props)
    const {id, firstName, lastName, email, address} = props.user
    this.state = {id, firstName, lastName, email, address}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const updatedUser = this.state

    console.log('updatedUser ', updatedUser)
    this.props.updateUserProfile(updatedUser)
  }

  render() {
    return (
      <React.Fragment>
        <Grid container alignItems="flex-start" spacing={2}>
          <div style={{padding: 20, margin: 'auto', maxWidth: 350}}>
            <CssBaseline />
            <Paper style={{padding: 16}}>
              <Typography
                variant="h4"
                align="center"
                component="h1"
                gutterBottom
              >
                Update your Profile
              </Typography>

              <form onSubmit={this.handleSubmit}>
                <div>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="firstName"
                      label="First Name"
                      align="center"
                      fullWidth
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="lasttName"
                      label="Last Name"
                      align="center"
                      fullWidth
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      name="email"
                      label="Email"
                      align="center"
                      fullWidth
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="address"
                      label="Address"
                      align="center"
                      fullWidth
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </div>
                <Grid item style={{marginTop: 16}}>
                  <Button variant="contained" type="submit" value="Submit">
                    Submit
                  </Button>
                </Grid>
              </form>
            </Paper>
          </div>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserProfile: updatedUser => dispatch(updateUserProfile(updatedUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)
