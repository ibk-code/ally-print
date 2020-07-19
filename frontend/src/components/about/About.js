import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import Affirm from "../Affirm";
import Footer from "../Footer";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <div className="abt-content container mt-5">
          <div className="pt-3">
            <h3 className="text-center p-colour">ABOUT ALLY</h3>
            <p className="text">
              AllyPrints is a brand that stands out in all facets. At
              AllyPrints, we give the very best and nothing less. Our materials
              are of exceptional quality and also very durable , affordable
              cost, high standard printing, and creative designs. Check a
              masterpiece and you can trace it to AllyPrints. You will always
              come back for more.
            </p>
          </div>
          <div className="pt-3">
            <h3 className="text-center p-colour">OUR DREAM</h3>
            <p className="text text-center">
              To make your imaginations a creation
            </p>
            <p className="text text-center">
              To make our ideas your top notch taste
            </p>
            <p className="text text-center">
              To satisfy our clients exceptionally
            </p>
            <p className="text text-center">
              To make sure you always come back for more.
            </p>
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

export default About;
