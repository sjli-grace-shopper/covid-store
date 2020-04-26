import React from 'react'
import axios from 'axios'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SendIcon from '@material-ui/icons/Send'

export default class OrderItem extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/orders/history/${this.props.match.params.id}`
    )
    this.setState({products: data[0].products})
  }
  render() {
    console.log(this.state.products)
    return (
      <div>
        <Typography variant="h3" align="center" component="h1" gutterBottom>
          Order Details
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
      </div>
    )
  }
}
