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
      order: [],
      products: [],
      status: '',
      categories: ['COMPLETED', 'IN_CART', 'PROCESSING', 'CANCELLED']
    }
    this.handleChange = this.handleChange.bind(this)
    // this.setOrderStatus = this.setOrderStatus.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/orders/history/${this.props.match.params.id}`
    )
    this.setState({products: data.products})
    this.setState({order: data})
  }
  handleChange(event) {
    console.log('CLICk')
    this.setState({status: event.target.innerText})
  }
  render() {
    console.log(this.state.status)
    return (
      <div>
        <Typography variant="h3" align="center" component="h1" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="h5" align="center" component="h5" gutterBottom>
          {/* Order Status: {this.state.order.status} */}
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
        <div></div>
      </div>
    )
  }
}
