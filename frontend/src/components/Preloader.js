import React, { Fragment } from 'react';

export default class PreLoader extends React.Component {

    render(){
        return(
            <Fragment>
              <div className="preloader">
                <img src="./asset/img/loader.gif" alt="preloader" className="img-fluid"/>
              </div>
            </Fragment>
        );
    }
}
