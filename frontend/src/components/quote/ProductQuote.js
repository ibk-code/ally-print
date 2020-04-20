import React from "react";

export default class ProductQuote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h4><b>Order Details</b></h4>
          <form className="pt-4">
            <h5>Product Informtion</h5>
            <div className="form-group pt-3 quote-form">
              <label htmlFor="product-desc">What do you want to print ?</label><br />
              <small>
                Please tell us what you want to print and the quantity.
              </small>
              <textarea
                id="product-desc"
                className="allyform-textarea"
                placeholder="500 t-shirts, 100 pens ..."
                value={this.props.productDesc}
                onChange={this.props.onChange}
              ></textarea>
            </div>
            <br />
            <div>
              <p>Do you have a design ?</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-check">
                    <input type="radio" name="design" className="form-check-input"
                    id="withdesign" />
                    <label className="form-check-label" htmlFor="withdesign">Yes I  do</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input type="radio" name="design" className="form-check-input"
                    id="nodesign" />
                    <label className="form-check-label" htmlFor="nodesign">No, I want your team to design for me.</label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group pt-3 quote-form">
              <label htmlFor="product-desc">Where do you want your order delivered too ?</label><br />
              <small>
                Please provide your location, so we can make your delivery seamless.
              </small>
              <textarea
                id="product-desc"
                className="allyform-textarea"
                placeholder="7,jacob street, Lagos"
                value={this.props.address}
                onChange={this.props.onChange}
              ></textarea>
            </div>
            <h5>Order Details</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group pt-3">
                  <label htmlFor="firstname">name</label><br />
                  <input
                    id="name"
                    className="allyprint-input"
                    placeholder="name"
                    value={this.props.name}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group pt-3">
                  <label htmlFor="email">Email</label><br />
                  <input
                    id="emai"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="allyprint-input"
                    placeholder="email"
                    value={this.props.email}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group pt-3">
                  <label htmlFor="phone">Phone</label><br />
                  <input
                    id="phone"
                    className="allyprint-input"
                    placeholder="phone"
                    value={this.props.phone}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
