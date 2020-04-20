import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Item from './HomeItem';
import Process from './Brand';
import Testimonal from './Testimonal';
import Affirm from './Affirm';
import Footer from './Footer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Item />
      <Process />
      <Testimonal />
      <div className="m-space bg-brand">
        <Affirm />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
