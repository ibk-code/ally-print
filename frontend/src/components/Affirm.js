import React from "react";

class Affirm extends React.Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex">
              <i className="fas fa-award text-white pt-1 s-font"></i>
              <div className="pl-3 text-white">
                <h5>Quality Printing</h5>
                <p>Provide the best quality</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <i className="far fa-clock text-white pt-1 s-font"></i>
              <div className="pl-3 text-white">
                <h5>Time Delivery</h5>
                <p>Always on time without hassle</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <i className="fas fa-thermometer-full text-white pt-1 s-font"></i>
              <div className="pl-3 text-white">
                <h5>Eco-Minded</h5>
                <p>All our products are eco-friendly</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <i className="fas fa-wallet text-white pt-1 s-font"></i>
              <div className="pl-3 text-white">
                <h5>Money Back</h5>
                <p>100% happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Affirm;
