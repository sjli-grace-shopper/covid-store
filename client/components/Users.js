import React from 'react'
import axios from 'axios'

export default class users extends React.Component {
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
        <h1>Users</h1>
        {!this.state.users.length ? (
          <h1>There are no users</h1>
        ) : (
          <ul>
            {this.state.users.map(user => (
              <div key={user.id}>
                <li>
                  {user.firstName} {user.lastName}
                </li>
                <p> Email: {user.email} </p>
              </div>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
