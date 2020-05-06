import React from "react";

class ItemCard extends React.Component {
  render() {
    const {item} = this.props
    return (
      <React.Fragment>
          <div className="item item-card bg-white shadow" style={{height: this.props.height}}>
            <img
              src={item.img}
              alt="product"
              className="img-fluid home-img"
            />
            <div className="item-desc p-3">
              <h4>{item.pname}</h4>
              <p className="p-colour">
                From{" "}
                <span>
                  &#x20A6;{item.price} / {item.pcs}Pcs
                </span>
              </p>
              <p style={{fontSize: "14px"}}>
                {item.pdetails}
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
