import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ItemCard from "./ItemCard";
import OwlCarousel from "react-owl-carousel";
import Loader from './Loader'
class Item extends React.Component {
  render() {
    const HomeItems = gql`
      {
        homeItems {
          id
          img
          pname
          price
          pcs
        }
      }
    `;
    const responsive = {
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true
          }
    }
    return (
      <React.Fragment>
        <div className="item-slider mt-5 container pl-4 pr-4">
          <h2 className="h-text">Featured Products</h2>
          <Query query={HomeItems}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <Loader />

              const itemsToRender = data.homeItems;

              if (itemsToRender === null) {
                console.log("empty data" + itemsToRender);
              }

              return (
                <OwlCarousel className="owl-theme" loop responsive={responsive} nav>
                  {itemsToRender.map(item => (
                    <ItemCard key={item.id} item={item} height= "25rem"/>
                  ))}
                </OwlCarousel>
              );
            }}
          </Query>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
