import React, {Component} from 'react'
import axios from 'axios'

export default class OrderReceipt extends Component {
  constructor() {
    super()
    this.state = {
      order: {}
    }
  }

  componentDidMount() {
    axios
      .get(`/api/orders/history/${this.props.match.params.id}`)
      .then(order => {
        this.setState({order: order.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.order.id ? (
          <div>
            <h1>Thank you for your order!</h1>
            {this.state.order.products.map(product => {
              return (
                <div key={product.id}>
                  {product.name}
                  {product.price}
                  {product.line_item.quantity}
                </div>
              )
            })}
          </div>
        ) : (
          <div>loading receipt...</div>
        )}
      </div>
    )
  }
}
