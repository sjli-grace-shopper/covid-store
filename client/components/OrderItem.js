import React from 'react'
import axios from 'axios'
export default class OrderItem extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/orders/history/${this.props.match.params.orderId}`
    )
    this.setState({products: data})
  }
  render() {
    console.log(this.state.products)
    return (
      <div>
        <h1>Order Details</h1>
        <h4>Products in Order</h4>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
