import React from "react";
import { Link } from "react-router-dom";

class Banner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="banner-content">
            <h1 className="text-center text-white">Let's Brand It For You</h1>
            <p className="text-center text-white">
              Order For Quality Printing And Get It Delivered To Your Doorstep
            </p>
            <Link className="btn btn-brand text-center d-block mx-auto" to="/quote">Get Quote</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
