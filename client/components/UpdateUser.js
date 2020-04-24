import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUserProfile} from '../store/user'

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
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lasttName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Update Your Profile!</button>
      </form>
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
