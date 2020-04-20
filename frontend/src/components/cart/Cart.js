import React from "react";
import Header from '../Header';
// import Banner from '../Banner';
import Affirm from '../Affirm';
import Footer from '../Footer';
import CartItem from './CartItem'
import AddedItem from './Cartsubitem'
import CartSummary from './CartSummary'

class Cart extends React.Component {

  deleteItem = () => {
    alert("deleted one item")
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container d-margin">
          <div className="row">
            <div className="col-md-9 bg-white shadow p-4">
              <CartItem>
                <AddedItem 
                  product= "Mug"
                  price="500"
                  quantity="10"
                  total="2000"
                  changeQuty={() => {
                    console.log("yay")
                  }}
                />
                <AddedItem 
                  product= "Mug"
                  price="500"
                  quantity="10"
                  total="2000"
                  changeQuty={() => {
                    console.log("yay")
                  }}
                />
              </CartItem>
            </div>
            <div className="col-md-3 p-4 bg-secondary text-white">
              <CartSummary 
                itemnum="3"
                totalprice="4000"
                deliveryfee="500"
                aggrtotal="4500"
                checkout={() => {console.log("checked out");
                }}
              />
            </div>
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

export default Cart;
