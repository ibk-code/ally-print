import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
        <Link className="navbar-brand" to="/">
          <img src="./asset/img/ally.png" alt="Ally" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/App" className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quote" className="nav-link">
                Get Quote
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="float-right pr-5">
          <div className="btn-group pr-5">
            <p
              className="dropdown-toggle p-colour"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ><i className="fas fa-search"></i></p>
            <div className="dropdown-menu search">
              <input type="text" name="" className="form-control" />
            </div>
          </div>
          <div className="btn-group">
            <p
              className="dropdown-toggle p-colour"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ><i className="fas fa-user"></i></p>
            <div className="dropdown-menu p-2 pt-3 user shadow">
                <Link className="dropdown-item p-colour" to="/signup">Login or Create Account</Link>
                <Link className="dropdown-item" to="/account"><i className="fas fa-user"></i>&ensp; Account</Link>
                <Link className="dropdown-item" to="/track"><i className="fas fa-box"></i>&ensp; Track Orders</Link>
                {/* <Link className="dropdown-item" to="#"><i className="fas fa-heart"></i>&ensp; Saved Items</Link> */}
            </div>
          </div>
          <Link className="p-colour cart" to="/cart"><i className="fas fa-shopping-basket"></i></Link>
        </div>
      </nav>
    );
  }
}

export default Header;
