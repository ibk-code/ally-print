import React from "react";
import Header from "../Header";
import Affirm from "../Affirm";
import Footer from "../Footer";
import axios from 'axios';
import Loader from "../Loader";
import {GlobalContext} from '../GlobalContext'
import ItemCard from "../ItemCard";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      loading : false,
      product : []
    }
  }

  fetchproduct = function () {
    this.setState({loading: true})
    try {
      
      axios.get(`https://allyprint.herokuapp.com/api/query/product`)
      .then(res => {
        console.log(res)
        const respon = res.data.product;
        // let test = [];
        // let alt, pcs, price, caption;
        let newObj = respon.map((e, i, a) => (
          {asset_id: a[i].id, url: a[i].url, alt: a[i].content.pdesc && a[i].content.pdesc.custom}
        ))
        console.log(newObj);
        this.setState({product: newObj});
      })


    }catch (e) {
      console.log(e);
      this.setState({error: true})
    }
  }

componentDidMount() {
   this.fetchproduct();
}

  render() {
    console.log(this.state.product)
    let products;

    if (this.state.loading) {
      products = <Loader />      
    }

    if (this.state.error) {
      products = <Loader />
    }

    if (this.state.product.length > 0) {
          // let itemsToRender = this.state.product
          // itemsToRender.length = 10

        products = <div className="product-list mx-auto">
          {this.state.product.map(elem => (
            <ItemCard key={elem.asset_id} dataValue={elem.asset_id} item={elem} visible= {true} products={this.state.product}/>
          ))}
        </div>
    }

    return (
      <GlobalContext.Consumer>
        {context => (
          <React.Fragment>
            <Header />
            <div className="mx-auto d-margin  prod-left prod-right">
              <h2 className="h-text">All Products</h2>
              <div>
                {products}
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

export default Products;
