import React, { Fragment } from 'react';
import { loader } from '../composedhelper' ;

export default class Loader extends React.Component {
    constructor(props){
        super(props)
        this._loadingelement = React.createRef();
    }


    
    componentDidMount() {
        loader();
    }

    render(){
        return(
            <Fragment>
              <div className="loader">
                <div className="loaderelem">A</div>
                <div className="loaderelem">L</div>
                <div className="loaderelem">L</div>
                <div className="loaderelem">Y</div>
              </div>
            </Fragment>
        )
    }
}
