import React from "react";

export default class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pt-5">
          <p className="p-color-2">
            <span className="fas fa-phone"></span>&emsp;+234 9027844103
          </p>
        </div>
        <div className="pt-3">
          <p className="p-color-2">
            <span className="fas fa-envelope-open"></span>
            &emsp;hi@allyprints.com
          </p>
        </div>
        <div className="social-media pt-3">
          <h5 className="p-color-2">We are Social:</h5>
          <div>
            <a
              href="https://web.facebook.com/AllyPrints"
              target="_blank"
              rel="noopener noreferrer"
              className="socialmedia-link"
            >
              <span className="fab fa-facebook-f"></span>
            </a>
            <a
              href="https://www.instagram.com/allyprints"
              target="_blank"
              rel="noopener noreferrer"
              className="socialmedia-link"
            >
              <span className="fab fa-instagram"></span>
            </a>
            <a
              href="https://www.linkedin.com/company/42800607"
              className="socialmedia-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-linkedin-in"></span>
            </a>
            <a
              href="https://twitter.com/Allyprints"
              target="_blank"
              rel="noopener noreferrer"
              className="socialmedia-link"
            >
              <span className="fab fa-twitter"></span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
