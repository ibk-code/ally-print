import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component {

  render() {
    return(
      <div className=" bg-dark">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-4">
              <img src="./asset/img/ally.png" alt="footer" />
              <p className="text-white">We are responsible for making your what you imagined in your hearth an ecpression. We are reliable print industry with a lot of experience.</p>
            </div>
            <div className="col-md-2">
              <h5 className="pt-3 p-colour pb-2">Quick Links</h5>
              <Link to="/shop" className="f-link">
                Shop
              </Link>
              <Link to="/design" className="f-link">
                Design
              </Link>
              <Link to="/track" className="f-link">
                Track
              </Link>
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
                <Link to="#" className="f-icon"><i className="fab fa-facebook"></i></Link>
                <Link to="#" className="f-icon"><i className="fab fa-linkedin"></i></Link>
                <Link to="#" className="f-icon"><i className="fab fa-instagram"></i></Link>
                <Link to="#" className="f-icon"><i className="fab fa-twitter"></i></Link>
              </div>
              <h5 className="pt-3 p-colour pb-2">Payment System</h5>
              <img src="./asset/img/icon/payment.png" className="img-fluid" alt="Payment System" />
              <h5 className="pt-3 p-colour">Delivery</h5>
              <span className="fab fa-dhl p-icon m-minus"></span>
            </div>
            <div className="col-md-3">
              <h5 className="pt-3 p-colour pb-2">Subscribe for our newsletter</h5>
              <form>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Drop your email" className="form-control f-input" />
                </div>
                <button className="btn btn-brand" type="button">Submit</button>
              </form>
            </div>
          </div>
          <p className="text-center text-secondary pt-5">Copyright &copy; 2020 AllyPrints. All rights reserved.</p>
          </div>
        </div>
      // </div>
    )
  }
}

export default Footer;