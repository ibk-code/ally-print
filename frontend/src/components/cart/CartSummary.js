import React from 'react';

export default class CartSummary extends React.Component{

  render() {
    return (
      <>
        <div className="">
          <h4>Order Summary</h4>
          <div className="items-summary d-flex justify-content-between flex-wrap">
            <p>{this.props.itemnum} Items</p>
            <p>{this.props.totalprice}</p>
          </div>
          <div className="items-delivery d-flex justify-content-between flex-wrap">
            <p>delivery</p>
            <p>{this.props.deliveryfee}</p>
          </div>
          <div className="total-cost d-flex justify-content-between flex-wrap">
            <p>Total</p>
            <p>{this.props.aggrtotal}</p>
          </div>
          <button className="btn bg-brand w-100 text-white" onClick={this.props.checkout}>Checkout</button>
        </div>
        <div className="upload mt-4">
          <div className="form-group">
            <div className="custom-file">
              <input type="file" ref={this.props.upload} className="custom-file-input" id="upload-field" />
              <label className="custom-file-label" style={{fontSize: '0.8rem'}} htmlFor="upload-field">Upload Design</label>
            </div>
          </div>
          <span>You can contact us to create your design</span>
        </div>
      </>
    )
  }
}