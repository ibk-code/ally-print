import React from 'react';
import Affirm from '../Affirm';
import Footer from '../Footer';
import Header from '../Header';
import TrackedItem  from'./TrackedItem'

class Track extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container d-margin bg-white">
          <div className="bg-white p-4 shadow">
            <TrackedItem 
              item="Letterhead"
              productdetails="100pcs of gloss paper letterhead"
            />
             <TrackedItem 
              item="Mug Design"
              productdetails="200pcs of mug design"
            />
            <TrackedItem 
              item="Table Card"
              productdetails="200pcs of table card"
            />
          </div>
        </div>
        <div className="m-space bg-brand">
          <Affirm />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Track