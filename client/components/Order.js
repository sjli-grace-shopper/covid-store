// Order Item component
// mapState - state.user, state.orders.isFetching
import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
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
                <NavLink to={`/orders/${order.id}`}>
                  <li>Order {order.id}</li>
                </NavLink>
                <p> Order Status: {order.status} </p>
                <p> Order Date : {order.updatedAt}</p>
              </div>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
