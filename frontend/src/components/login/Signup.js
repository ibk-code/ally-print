import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      password: "",
      address: " ",
      phone: " ",
      gender: "Male",
      errorMessage: " ",
    };
  }

  _signup = async (data) => {
    console.log(this.state);
    await console.log(data);
  };

  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div className="d-block">
              <div className="row no-gutters w-100 s-ht">
                <div className="col-md-6 bh-100 s-text bg-brand">
                  <div className="p-5">
                    <div className="sign-body">
                      <h2 className="text-center mt-4 text-light">
                        {" "}
                        Welcome to Ally
                      </h2>
                      <p className="text-center text-light">
                        Turing your imagination to an expression
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 w-100 bh-100">
                  <img
                    src="./asset/img/ally.png"
                    alt="ally logo"
                    className="img-fluid d-block mx-auto"
                  />
                  <div>
                    <h2 className="p-colour text-center">SIgn Up</h2>
                    <form
                      className="pl-3 pr-3"
                      onSubmit={(e) => {
                        context.signUp(e);
                      }}
                    >
                      <div className="form-group">
                        <label>FullName</label>
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="FullName"
                          onChange={context.updateName}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name=""
                          value={context.state.email}
                          className="form-control"
                          placeholder="Email"
                          onChange={context.updateEmail}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          name=""
                          value={context.state.address}
                          className="form-control"
                          placeholder="Address"
                          onChange={context.updateAddress}
                        />
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              type="text"
                              name=""
                              value={context.state.phone}
                              className="form-control"
                              placeholder="Phone"
                              onChange={context.updatePhone}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <label>Gender</label>
                            <select
                              className="form-control"
                              value={context.state.gender}
                              onChange={context.updateGender}
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name=""
                          value={context.state.password}
                          className="form-control"
                          placeholder="Password"
                          onChange={context.updatePassword}
                        />
                      </div>
                      <div>
                        <button
                          className="btn bg-brand text-light"
                          type="submit"
                        >
                          Submit
                        </button>
                        <Link to="/login" className="float-right p-colour">
                          Login
                        </Link>
                      </div>
                    </form>
                    <p className="text-center errormessage">
                      {context.state.errorMessage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default SignUp;
