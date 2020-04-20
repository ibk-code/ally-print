import React from "react";

class ItemCard extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="item item-card bg-white shadow">
            <img
              src={this.props.item.img}
              alt="product"
              className="img-fluid home-img"
            />
            <div className="item-desc p-3">
              <h4>{this.props.item.pname}</h4>
              <p className="p-colour">
                From{" "}
                <span>
                  &#x20A6;{this.props.item.price} / {this.props.item.pcs}Pcs
                </span>
              </p>
              <p className="saved">
                <i className="fas fa-heart"></i>
              </p>
              <button type="button" className="btn btn-brand">
                <i className="fas fa-cart-plus"></i> &emsp; Add To Cart
              </button>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default ItemCard;
