import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className=" bg-dark">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-4">
              <img src="./asset/img/ally.png" alt="footer" />
              <p className="text-white">
                We are responsible for making what you imagine in your heart an
                expression. We are a reliable print industry with a lot of
                experience.
              </p>
            </div>
            <div className="col-md-2">
              <h5 className="pt-3 p-colour pb-2">Quick Links</h5>
              <Link to="/products" className="f-link">
                Products
              </Link>
              {/* <Link to="/design" className="f-link">
                Design
              </Link> */}
              {/* <Link to="/login" className="f-link">
                Login
              </Link> */}
              <Link to="/about" className="f-link">
                About
              </Link>
              <Link to="/contact" className="f-link">
                Contact
              </Link>
            </div>
            <div className="col-md-3">
              <h5 className="pt-3 p-colour pb-2">Follow Us:</h5>
              <div>
                <a
                  href="https://web.facebook.com/AllyPrints"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/42800607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/allyprints"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/Allyprints"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <h5 className="pt-3 p-colour">Delivery</h5>
              <span className="fab fa-dhl p-icon m-minus"></span>
            </div>
            <div className="col-md-3">
              {/* <h5 className="pt-3 p-colour pb-2">Subscribe for our newsletter</h5>
              <form>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Drop your email" className="form-control f-input" />
                </div>
                <button className="btn btn-brand" type="button">Submit</button>
              </form> */}
              <h5 className="pt-3 p-colour pb-2">Payment System</h5>
              <img
                src="./asset/img/icon/payment.png"
                className="img-fluid"
                alt="Payment System"
              />
            </div>
          </div>
          <p className="text-center text-secondary pt-5">
            Copyright &copy; 2020 AllyPrints. All rights reserved.
          </p>
        </div>
      </div>
      // </div>
    );
  }
}

export default Footer;
