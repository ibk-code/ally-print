import React from 'react';
import TrackIndicator from './TrackIndicator'

export default class TrackedItem extends React.Component {

  render() {
    return (
      <>
        <div>
          <div className="pl-5">
            <h5>{this.props.item}</h5>
            <p>{this.props.productdetails}</p>
          </div>
          <ul className = "track-timeline">
            <TrackIndicator
              heading="Payment"
              checked= {true}
              date = "02/04/2020"
            />
            <TrackIndicator
              heading="Confirmation"
              checked= {true}
              date = "02/04/2020"
            />
            <TrackIndicator
              heading="Delivery"
              checked= {true}
              date = "02/04/2020"
            />
            <TrackIndicator
              heading="Refund"
              checked= {false}
              date = "02/04/2020"
            />
            <TrackIndicator
              heading="Success"
              checked= {true}
              date = "02/04/2020"
            />
          </ul>
        </div>
      </>
    )
  }
}