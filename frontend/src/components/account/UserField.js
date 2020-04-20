import React from 'react';

export default class UserField extends React.Component{

    render(){
        let {heading, text} = this.props;
        return(
            <React.Fragment>
                <div className="profie-card p-3">
                    <h5 className="profile-card-head">{heading}</h5>
                    <p className="profie-card--text pt-3">{text}</p>
                </div>
            </React.Fragment>
        )
    }
}