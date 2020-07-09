import React from "react";
import {GlobalContext} from './GlobalContext'
import {Link} from 'react-router-dom'

class ItemCard extends React.Component {
  render() {
    let {item} = this.props
    // let {contextItem} = this.props.context.custom
    return (
      <GlobalContext.Consumer>
        {context => (
          <React.Fragment>
              <div className="item item-card bg-white shadow" style={{height: this.props.height}}>
                <img
                  src={item.url}
                  alt="product"
                  className="img-fluid home-img"
                />
                <div className="item-desc p-3">
                  <h4>{item.alt && item.alt.caption}</h4>
                  <p className="p-colour mb-1">
                    From{" "}
                    <span>
                      &#x20A6;{item.alt && item.alt.price} / {item.alt && item.alt.pcs}Pcs
                    </span>
                  </p>
                  <p style={{fontSize: "14px", display: this.props.visible? "block" : "none"}}>
                    {item.alt && item.alt.alt}
                  </p>
                  <Link type="button" to="/quote" className="btn btn-brand" 
                  // onClick={(e) => {
                  //   context.handleAddToCart(e, this.props.products)
                  // }} 
                  data-value={this.props.dataValue}>
                    Get Quote
                  </Link >
                </div>
              </div>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default ItemCard;
