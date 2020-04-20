import React from 'react';

export default class UserImg extends React.Component{

    render(){
        return(
            <img src={this.props.img} className="img-fluid d-block mx-auto" alt="user profile Avatar"/>
        )
    }
}