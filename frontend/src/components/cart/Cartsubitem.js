import React from 'react';
import {GlobalContext} from '../GlobalContext'

export default class AddedItem extends React.Component{

  render() {
    return(
      <GlobalContext.Consumer>
        {context => (
          <React.Fragment>
            <tr>
              <td>
                <div className="d-flex">
                  <img className="cart-img" alt="product-description" src={this.props.img}/>
                  <div className="p-desc">
                    <strong className="pl-4">{this.props.product}</strong>
                  </div>
                </div>
              </td>
              <td>
                <input className="allyprint-input cart-input" value={this.props.quantity} data-product={this.props.dataProduct} type="text" onChange={e => {
                  context.updateQuantity(e)
                }}/>
              </td>
              <td>
                {this.props.price}
              </td>
              <td>
                {this.props.total}
              </td>
              <td>
                <button onClick={context.removeFromCart} className="cart-dbtn" data-product={this.props.dataProduct}>remove</button>
              </td>
            </tr>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    )
  }
}