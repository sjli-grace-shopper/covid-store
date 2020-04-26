// Order Item component
// mapState - state.user, state.orders.isFetching
import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SendIcon from '@material-ui/icons/Send'
import ListItem from '@material-ui/core/ListItem'

export default class Orders extends React.Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/orders/history')
    this.setState({orders: data})
  }
  render() {
    return (
      <div>
        <h1>Order History</h1>
        {!this.state.orders.length ? (
          <h1>You do not have any placed orders</h1>
        ) : (
          <ul>
            {this.state.orders.map(order => (
              <div key={order.id}>
                <ListItem button>
                  <ListItem button key={order.id}>
                    <NavLink to={`/orders/${order.id}`}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      Order {order.id}
                    </NavLink>
                  </ListItem>
                  <ListItem>Order Status: {order.status}</ListItem>
                  <ListItem>Order Date : {order.updatedAt}</ListItem>
                </ListItem>
              </div>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
