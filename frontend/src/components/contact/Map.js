import React from 'react';
import { Link } from "react-router-dom";

export default class Map extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="pt-5"> 
                    <p className="p-color-2"><span className="fas fa-phone"></span>&emsp;+234 8091465463</p>
                    <p className="p-color-2"><span className="fas fa-phone"></span>&emsp;+234 8091465463</p>
                </div>
                <div className="pt-3">
                    <p className="p-color-2"><span className="fas fa-envelope-open"></span>&emsp;hi@allyprint.com</p>
                </div>
                <div className="social-media pt-3">
                    <h5 className="p-color-2">We are Social:</h5>
                    <div>
                        <Link to="#" className="socialmedia-link"><span className="fab fa-facebook-f"></span></Link>
                        <Link to="#" className="socialmedia-link"><span className="fab fa-instagram"></span></Link>
                        <Link to="#" className="socialmedia-link"><span className="fab fa-linkedin-in"></span></Link>
                        <Link to="#" className="socialmedia-link"><span className="fab fa-twitter"></span></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}