import React from 'react';
import Map from './Map'
import Contactform from './Contactform'
import Header from '../Header';
// import Banner from '../Banner';
import Affirm from '../Affirm';
import Footer from '../Footer';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.elems= [];
    this.state = {
        name: ' ',
        email: ' ',
        phone: ' ',
        message: ' '
    }
  }

  inputHandler = (event) => {
   if (document.activeElement === this.elems[0]) {
     this.setState({name: event.target.value})
   }
   if (document.activeElement === this.elems[1]) {
    this.setState({email: event.target.value})
   }
   if (document.activeElement === this.elems[2]) {
    this.setState({phone: event.target.value})
   }
   if (document.activeElement === this.elems[3]) {
    this.setState({message: event.target.value})
   }
  }

  componentDidMount(){
    // this.inputHandler();
  }

    render(){
        return(
            <React.Fragment>
              <Header/>
              <div className="container d-margin">
                <h3 className="text-center p-colour mt-5">GET IN TOUCH</h3>
                <div className="row pt-2 mt-4">
                    <div className="col-md-6">
                      <Map />
                    </div>
                    <div className="col-md-6">
                      <Contactform {...this.state} elems = {this.elems} onchange= {this.inputHandler}/>
                    </div>
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

export default Contact;