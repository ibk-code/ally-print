import React from 'react';


class Process extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h2 className="h-text">Brand Your Product</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <img src="./asset/img/brand.jpg" className="img-fluid" alt="brand" />
            </div>
            <div className="col-md-6 process">
              <div className="row">
                <div className="col-md-6 p-img">
                  <img src="./asset/img/icon/order.png" className="img-fluid" alt="Place-Order" />
                  <h6 className="font-weight-bold">Place Order</h6>
                  <p className="text-justify">Just place an order today on any form of printing</p>
                </div>
                 <div className="col-md-6 p-img">
                  <img src="./asset/img/icon/upload.png" className="img-fluid" alt="Upload" />
                  <h6 className="font-weight-bold">Upload / Create Design</h6>
                  <p className="text-justify">Upload or Create your own Pattern</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 p-img">
                  <img src="./asset/img/icon/track.png" className="img-fluid" alt="Place-Order" />
                  <h6 className="font-weight-bold">Track Progress</h6>
                  <p className="text-justify">Track the Progress of your order up till completion state</p>
                </div>
                 <div className="col-md-6 p-img">
                  <img src="./asset/img/icon/truck.png" className="img-fluid" alt="Upload" />
                  <h6 className="font-weight-bold">We Deliver</h6>
                  <p className="text-justify">Get your order delivered to your doorstep whereever you may be.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Process;