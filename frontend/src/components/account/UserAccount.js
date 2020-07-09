import React from "react";
import Header from "../Header";
import UserImg from "./Userimg";
import Affirm from "../Affirm";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import UserField from "./UserField";
import { GlobalContext } from "../GlobalContext";

class UserAccount extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Header />
            <div className="container d-margin">
              <div>
                <UserImg img="./asset/img/user.png" />
                {/* <Link to="#" className="edit-user text-center d-block pt-4">
                  <span className="fas fa-pencil-alt"></span>&nbsp;Edit Profile
                </Link> */}
                <div className="pt-5">
                  <div>
                    {!context.state.loggedIn ? <p className="text-center">User is not logged in</p> : 
                    <div className="user-details">
                        <UserField heading="Name" text={context.state.name} />
                        <UserField heading="Email" text={context.state.email} />
                        <UserField
                        heading="Address"
                        text={context.state.address}
                        />
                        <UserField heading="Phone" text={context.state.phone} />
                        <UserField heading="Gender" text={context.state.gender} />
                    </div>}
                  </div>
                </div>
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

export default UserAccount;
