import React from "react";
import ProductQuote from "./ProductQuote";
import Header from "../Header";
// import Banner from '../Banner';
import Affirm from "../Affirm";
import Footer from "../Footer";

class Quote extends React.Component {
  render() {
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

export default Quote;
