import React from "react";
import ProductQuote from "./ProductQuote";
import Header from "../Header";
// import Banner from '../Banner';
import Affirm from "../Affirm";
import Footer from "../Footer";
import history from '../history'

class Quote extends React.Component {
  render() {
    let loggedInStatus = window.sessionStorage.getItem('loggedIn')
    if(!loggedInStatus) {
      history.push('/login')
      return null
    }else{
      return (
        <React.Fragment>
          <Header />
          <div className="container p-4 d-margin">
            <div className="bg-white shadow p-5">
              <ProductQuote />
            </div>
          </div>
          <div className="m-space bg-brand">
            <Affirm />
            <Footer />
          </div>
        </React.Fragment>
      );
    } 
  }
}

export default Quote;
