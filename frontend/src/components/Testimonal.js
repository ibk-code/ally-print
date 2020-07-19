import React from "react";

class Testimonal extends React.Component {
  render() {
    return (
      <div className="mt-5 mb-5">
        <h2 className="h-text container">Testimonals</h2>
        <div className="testimonial p-5">
          <p className="text-center">
            Hear what our client say about our service
          </p>
          <div
            id="carouselExampleIndicators"
            className="carousel slide container"
            data-ride="carousel"
          >
            {/* <ol className="carousel-indicators mt-5">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="u-test d-block mx-auto">
                  <h5 className="text-center p-colour">Bamgboye Titilope</h5>
                  <p className="text-center">Customer</p>
                  <img
                    src="./asset/img/avatar.jpg"
                    className="rounded-circle t-img d-block mx-auto"
                    alt="Customer-img"
                  />
                  <p className="text-center">
                    I ordered for a t-shirt from AllyPrints and it was delivered
                    within three days. AllyPrints is the best{" "}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="u-test d-block mx-auto">
                  <h5 className="text-center p-colour">Adeola Daniel</h5>
                  <p className="text-center">Customer</p>
                  <img
                    src="./asset/img/avatar.jpg"
                    className="rounded-circle t-img d-block mx-auto"
                    alt="Customer-img"
                  />
                  <p className="text-center">
                    I ordered for a magic mug at AllyPrints and I got a
                    fantastic magic mug. Thank you AllyPrints{" "}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="u-test d-block mx-auto">
                  <h5 className="text-center p-colour">Dafe</h5>
                  <p className="text-center">Pop Collections</p>
                  <img
                    src="./asset/img/avatar.jpg"
                    className="rounded-circle t-img d-block mx-auto"
                    alt="Customer-img"
                  />
                  <p className="text-center">
                    I ordered for a packing nylon from AllyPrints and I got a
                    smooth delivery from AllyPrints :).
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="fas fa-angle-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="fas fa-angle-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonal;
