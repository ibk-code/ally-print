import React from 'react';

export default class AddedItem extends React.Component{

  render() {
    return(
      <React.Fragment>
        <tr>
          <td>
            <div className="d-flex">
              <img className="cart-img" alt="product-image" src="./asset/img/card.jpg"/>
              <div className="p-desc">
                <strong className="pl-4">{this.props.product}</strong>
              </div>
            </div>
          </td>
          <td>
            <input className="allyprint-input cart-input" value={this.props.quantity} type="number" onChange={this.props.changeQuty}/>
          </td>
          <td>
            {this.props.price}
          </td>
          <td>
            {this.props.total}
          </td>
          <td>
            <button onClick={this.props.deleteItem} className="cart-dbtn"><i className="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}