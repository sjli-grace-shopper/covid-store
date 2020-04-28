import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {deleteUser} from '../store/user'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.deleteUser = this.deleteUser.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/users')
    this.setState({users: data})
  }
  //  async componentDidUpdate() {
  //     const {data} = await axios.get('/api/users')
  //     this.setState({users: data})
  //  }
  async deleteUser(userId) {
    await axios.delete(`/api/users/${userId}`)
    this.componentDidMount()
  }
  render() {
    return (
      <div className="usersList">
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Users
        </Typography>
        {!this.state.users.length ? (
          <h1>Loading users...</h1>
        ) : (
          <ul>
            {this.state.users.map(user => (
              <ListItem key={user.id}>
                <ListItem align-items="center">
                  <p>
                    {user.firstName} {user.lastName}: {user.email}
                  </p>
                  <br />
                  <br />
                </ListItem>

                <Button
                  l={5}
                  variant="outlined"
                  className="delete user"
                  type="button"
                  onClick={() => this.deleteUser(user.id)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
