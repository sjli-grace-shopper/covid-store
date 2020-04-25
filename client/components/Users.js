import React from 'react'
import axios from 'axios'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

export default class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/users')
    this.setState({users: data})
  }

  render() {
    return (
      <div className="usersList">
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Users
        </Typography>
        {!this.state.users.length ? (
          <h1>There are no users</h1>
        ) : (
          <ul>
            {this.state.users.map(user => (
              <ListItem button key={user.id}>
                <p>
                  {' '}
                  {user.firstName} {user.lastName}: {user.email}{' '}
                </p>
              </ListItem>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
