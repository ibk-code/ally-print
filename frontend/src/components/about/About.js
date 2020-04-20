import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Affirm from '../Affirm';
import Footer from '../Footer';

class About extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header />
                <Banner />
                <div className="abt-content container mt-5">
                    <div className="pt-3">
                        <h3 className="text-center p-colour">ABOUT ALLY</h3>
                        <p className="text">Ally simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="pt-3">
                        <h3 className="text-center p-colour">OUR DREAM</h3>
                        <p className="text">Ally simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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

export default About