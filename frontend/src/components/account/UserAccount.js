import React from 'react';
import Header from '../Header';
import UserImg from './Userimg';
import Affirm from '../Affirm';
import Footer from '../Footer';
import {Link} from 'react-router-dom'
import UserField from './UserField'

class UserAccount extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="container d-margin">
                    <div>
                        <UserImg img="./asset/img/user.png"/>
                        <Link to="#" className="edit-user text-center d-block pt-4"><span className="fas fa-pencil-alt"></span>&nbsp;Edit Profile</Link>
                        <div className="pt-5">
                            <div className="user-details">
                                <UserField heading="Name" text="Anthony Jeremy"/>
                                <UserField heading="Email" text="ibkcode@helloibk.dev"/>
                                <UserField heading="Address" text="7,jacob street, Fadeyi, Lagos"/>
                                <UserField heading="Phone" text="08091465463"/>
                                <UserField heading="Gender" text="Male"/>
                            </div>
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

export default UserAccount;