import React from "react";

export default class CartItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="table-responsive cart">
          <table className="table table-borderless">
            <caption>Cart Items</caption>
            <thead>
              <tr>
                <th scope="col">Product Details</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
