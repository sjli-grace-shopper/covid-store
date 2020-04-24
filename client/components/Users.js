import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/user'

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    console.log('PROPS', this.props)
    return (
      <div className="usersList">
        {this.props.users.map(user => {
          return (
            <div key={user.id}>
              <div>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>{user.email}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
