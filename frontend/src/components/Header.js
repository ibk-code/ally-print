import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

class Header extends React.Component {
  // constructor() {
  //   this.state = {
  //     activepage = location.pathname
  //   }
  // }

  render() {
    const loggedIn = window.sessionStorage.getItem("loggedIn");
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
              <NavLink className="navbar-brand" to="/">
                <img
                  src="./asset/img/ally.png"
                  alt="Ally"
                  className="img-fluid"
                />
              </NavLink>
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
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/products" className="nav-link">
                      All Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/quote" className="nav-link">
                      Get Quote
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="user-avatar">
                {/* <div className="btn-group pr-5">
            <p
              className="dropdown-toggle p-colour"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ><i className="fas fa-search"></i></p>
            <div className="dropdown-menu search">
              <input type="text" name="" className="form-control" />
            </div>
          </div> */}
                <div className="btn-group">
                  <p
                    className="dropdown-toggle p-colour"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"></i>
                  </p>
                  <div className="dropdown-menu p-2 pt-3 user shadow">
                    {!context.state.loggedIn ? 
                      <NavLink className="dropdown-item p-colour" to="/signup">
                        Login or Create Account
                      </NavLink>
                     : 
                      <NavLink className="dropdown-item p-colour" to="#" onClick={context.logOut}>
                        Log out
                      </NavLink>
                    }
                    <NavLink className="dropdown-item" to="/account">
                      <i className="fas fa-user"></i>&ensp; Account
                    </NavLink>
                    {/* <NavLink className="dropdown-item" to="/track">
                      <i className="fas fa-box"></i>&ensp; Track Orders
                    </NavLink> */}
                    {/* <NavLink className="dropdown-item" to="#"><i className="fas fa-heart"></i>&ensp; Saved Items</NavLink> */}
                  </div>
                </div>
                {/* <NavLink className="p-colour cart" to="/cart">
                  <i className="fas fa-shopping-basket"></i>
                  <span className="count">{context.state.addedItems.length}</span>
                </NavLink> */}
              </div>
            </nav>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default Header;
