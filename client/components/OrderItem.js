import React from 'react'
import axios from 'axios'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SendIcon from '@material-ui/icons/Send'
import {Button, MenuItem, Select} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'

export default class OrderItem extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      order: [],
      categories: ['COMPLETED', 'IN_CART', 'PROCESSING', 'CANCELLED']
    }
    this.handleChange = this.handleChange.bind(this)
    this.setOrderStatus = this.setOrderStatus.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/orders/history/${this.props.match.params.id}`
    )
    this.setState({products: data[0].products})
    this.setState({order: data[0]})
  }
  handleChange(event) {
    console.log('CLICk')
    this.setState({
      order: {...this.state.order, status: event.target.innerText}
    })
  }
  async setOrderStatus() {
    // evt.preventDefault()
    console.log('CLICk')
    await axios.put(
      `/api/orders/history/${this.props.match.params.id}`,
      this.state.order
    )
    this.componentDidMount()
  }
  render() {
    console.log(this.state.order)
    return (
      <div>
        <Typography variant="h3" align="center" component="h1" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="h5" align="center" component="h5" gutterBottom>
          Order Status: {this.state.order.status}
        </Typography>
        <Typography variant="h5" align="center" component="h5" gutterBottom>
          Products in Order
        </Typography>
        <ul>
          {this.state.products.map(product => (
            <ListItem button key={product.id}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              {product.name}
              <Divider />
            </ListItem>
          ))}
        </ul>
        <div>
          <InputLabel id="select-label">Category</InputLabel>
          <Select
            id="select-outlined"
            variant="outlined"
            name="orderCategory"
            onChange={this.handleChange}
            label="Category"
            className="category"
            fullWidth
          >
            {this.state.categories.map(category => (
              <MenuItem key={category}>{category}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
    )
  }
}
