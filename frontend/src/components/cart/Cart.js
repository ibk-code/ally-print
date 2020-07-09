import React from "react";
import Header from '../Header';
import Affirm from '../Affirm';
import Footer from '../Footer';
import CartItem from './CartItem'
import AddedItem from './Cartsubitem'
import CartSummary from './CartSummary'
import {GlobalContext} from '../GlobalContext'

class Cart extends React.Component {

  deleteItem = () => {
    alert("deleted one item")
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <React.Fragment>
            <Header />
            <div className="container d-margin">
              <div className="row">
                <div className="col-md-9 bg-white shadow p-4">
                  {
                    context.state.addedItems <= 0 ?
                    <p className="text-center">Nothing has been added to cart.</p>
                    :
                    <CartItem>
                    {context.state.addedItems.map(item => (
                      <AddedItem 
                      key={item.asset_id}
                      dataProduct = {item.asset_id}
                      img={item.url}
                      product= {item.alt.caption}
                      price={item.alt.price}
                      quantity={item.alt.pcs}
                      total={item.alt.price}
                    />
                    ))}  
                    {/* <AddedItem 
                      product= "Mug"
                      price="500"
                      quantity="10"
                      total="2000"
                      changeQuty={() => {
                        console.log("yay")
                      }}
                    /> */}
                  </CartItem>
                  }
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
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default Cart;
