import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SendIcon from '@material-ui/icons/Send'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

export default class Orders extends React.Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/orders')
    this.setState({orders: data})
  }
  render() {
    return (
      <div>
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Order History
        </Typography>
        {!this.state.orders.length ? (
          <h1>You do not have any placed orders</h1>
        ) : (
          <ul>
            {this.state.orders.map(order => (
              <div key={order.id}>
                <ListItem button>
                  <ListItem button key={order.id}>
                    <NavLink to={`/orders/${order.id}`}>
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
