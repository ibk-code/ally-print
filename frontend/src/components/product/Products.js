import React from "react";
import Header from "../Header";
import Affirm from "../Affirm";
import Footer from "../Footer";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../Loader";
import ItemCard from "../ItemCard";

class Products extends React.Component {
  render() {
    const ProductItems = gql`
      {
        homeItems {
          id
          img
          pname
          pdetails
          price
          pcs
        }
      }
    `;
    return (
      <React.Fragment>
        <Header />
        <div className="mx-auto d-margin p-5">
          <h2 className="h-text">All Products</h2>
          <Query query={ProductItems}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <Loader />;

              const itemsToRender = data.homeItems;
              console.log(itemsToRender);

              if (itemsToRender === null) {
                console.log("empty data" + itemsToRender);
              }

              return (
                <div className="product-list mx-auto">
                  {itemsToRender.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              );
            }}
          </Query>
        </div>
        <div className="m-space bg-brand">
          <Affirm />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
