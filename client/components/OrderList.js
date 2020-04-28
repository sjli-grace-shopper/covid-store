import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SendIcon from '@material-ui/icons/Send'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import {Button, MenuItem, Select} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'

export default class Orders extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: ['All', 'Completed', 'In Cart', 'Processing', 'Cancelled'],
      category: 'All',
      orders: [],
      completed: [],
      inCart: [],
      processing: [],
      cancelled: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({category: event.target.innerText})
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/orders')
    this.setState({orders: data})
    this.setState({
      completed: this.state.orders.filter(order => order.status === 'COMPLETED')
    })
    this.setState({
      inCart: this.state.orders.filter(order => order.status === 'IN_CART')
    })
    this.setState({
      processing: this.state.orders.filter(
        order => order.status === 'PROCESSING'
      )
    })
    this.setState({
      cancelled: this.state.orders.filter(order => order.status === 'CANCELLED')
    })
  }
  render() {
    console.log(this.state.category)
    return (
      <div>
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Order History
        </Typography>
        {!this.state.orders.length ? (
          <h1>Loading orders...</h1>
        ) : (
          <ul>
            <div>
              <InputLabel id="select-label">Category</InputLabel>
              <Select
                id="select-outlined"
                variant="outlined"
                name="orderCategory"
                onChange={this.handleChange}
                defaultValue={this.state.category}
                label="Category"
                className="category"
                fullWidth
              >
                {this.state.categories.map(category => (
                  <MenuItem key={category}>{category}</MenuItem>
                ))}
              </Select>
            </div>
            {this.state.category === 'All' &&
              this.state.orders.map(order => (
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
            {this.state.category === 'Completed' &&
              this.state.completed.map(order => (
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
            {this.state.category === 'In Cart' &&
              this.state.inCart.map(order => (
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
            {this.state.category === 'Processing' &&
              this.state.processing.map(order => (
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
            {this.state.category === 'Cancelled' &&
              this.state.cancelled.map(order => (
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
