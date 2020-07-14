import React from "react";
import axios from 'axios';

export default class ProductQuote extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      desc: " ",
      designStatus: " ",
      address: " ",
      name: " ",
      email: " ",
      phone: " ",
      status: false,
      statusMessage: " ",
    }
  }

  submitQuote = e => {
    this.setState({
      status:false
    })
    e.preventDefault();
    const url = `https://allyprint.herokuapp.com/api/query/quote`;
    axios({
      method: "post",
      url: url,
      data: {
        desc: this.state.desc,
        designStatus: this.state.designStatus,
        phone: this.state.phone,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
      },
    }).then(res => {
      this.setState({
        desc: " ",
        designStatus: " ",
        address: " ",
        name: " ",
        email: " ",
        phone: " ",
        status: true,
        statusMessage: " Qoute was sent successfully. Please expect a reply from us"
      })
    }).catch(e => {
      this.setState({
        status:true,
        statusMessage: "Please try again your quote was not submitted"
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h4><b>Order Details</b></h4>
          <form className="pt-4" onSubmit={this.submitQuote}>
            <h5>Product Informtion</h5>
            <div className="form-group pt-3 quote-form">
              <label htmlFor="product-desc">What do you want to print ?</label><br />
              <small>
                Please tell us what you want to print and the quantity.
              </small>
              <textarea
                id="product-desc"
                required
                value={this.state.desc}
                className="allyform-textarea"
                placeholder="500 t-shirts, 100 pens ..."
                onChange={e => (
                  this.setState({desc: e.target.value})
                )}
              ></textarea>
            </div>
            <br />
            <div>
              <p>Do you have a design ?</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-check">
                    <input type="radio" name="design" className="form-check-input"
                    id="withdesign" onChange={e => (
                      e.target.checked &&
                      this.setState({designStatus: "user have a design"})
                    )}/>
                    <label className="form-check-label" htmlFor="withdesign">Yes I  do</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input type="radio" name="design" className="form-check-input"
                    id="nodesign" onChange={e => (
                      e.target.checked &&
                      this.setState({designStatus: "user wants us to handle design"})
                    )}/>
                    <label className="form-check-label" htmlFor="nodesign">No, I want your team to design for me.</label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group pt-3 quote-form">
              <label htmlFor="address">Where do you want your order delivered too ?</label><br />
              <small>
                Please provide your location, so we can make your delivery seamless.
              </small>
              <textarea
                id="address"
                value={this.state.address}
                className="allyform-textarea"
                placeholder="7,jacob street, Lagos"
                onChange={e => (
                  this.setState({address: e.target.value})
                )}
              ></textarea>
            </div>
            <h5>Order Details</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group pt-3">
                  <label htmlFor="name">Name</label><br />
                  <input
                    id="name"
                    className="allyprint-input"
                    placeholder="name"
                    required
                    value={this.state.name}
                    onChange={e => (
                      this.setState({name: e.target.value})
                    )}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group pt-3">
                  <label htmlFor="email">Email</label><br />
                  <input
                    id="email"
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="allyprint-input"
                    required
                    placeholder="email"
                    value={this.state.email}
                    onChange={e => (
                      this.setState({email: e.target.value})
                    )}
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
                    required
                    className="allyprint-input"
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={e => (
                      this.setState({phone: e.target.value})
                    )}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn bg-brand text-light">Submit</button>
          </form>
          <div>{this.state.status && this.state.statusMessage}</div>
        </div>
      </React.Fragment>
    );
  }
}
