import React from "react";
import ItemCard from "./ItemCard";
import OwlCarousel from "react-owl-carousel";
import Loader from './Loader'
import axios from 'axios';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      loading : false,
      product : []
    }
  }

componentDidMount() {
    this.setState({loading: true})
    try {
      
      axios.get(`https://allyprint.herokuapp.com/api/query/product`)
      .then(res => {
        const respon = res.data.product;
        let newObj = respon.map((e, i, a) => (
          {asset_id: a[i].id, url: a[i].url, alt: a[i].content.pdesc && a[i].content.pdesc.custom}
        ))
        this.setState({product: newObj})
      })


    } catch (e) {
      console.log(e);
      this.setState({error: true})
    }
  }

  render() {
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

    let product;

    if (this.state.loading) {
      product = <Loader />      
    }

    if (this.state.error) {
      product = <Loader />
    }

    if (this.state.product.length > 0) {
          let itemsToRender = this.state.product
          itemsToRender.length = 10

          product = <OwlCarousel className="owl-theme" loop responsive={responsive} nav>
          {itemsToRender.map(elem => (
            <ItemCard key={elem.asset_id} dataValue={elem.asset_id} height="24rem" item={elem} visible= {false} products={this.state.product}/>
          ))}
        </OwlCarousel>
    }

    return (
      <React.Fragment>
        <div className="item-slider mt-5 container pl-4 pr-4">
          <h2 className="h-text">Featured Products</h2>
          <div>
            {
              product
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;