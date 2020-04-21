import React from "react";

export default class TrackIndicator extends React.Component {
  render() {
    return (
      <>
        <li className="">
          <small>{this.props.heading}</small>
          <p className="track-checked" style={{background: this.props.checked? "#ed6e2e" : "#a5a3a3"}}>
            <i className="fas fa-check"></i>
          </p>
          <small>{this.props.date}</small>
        </li>
      </>
    );
  }
}
