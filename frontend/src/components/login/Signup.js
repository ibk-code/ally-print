import React from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      password: " ",
      errorMessage: " "
    };
  }

  _signup = async data => {
    console.log(this.state);
    await console.log(data);
  };

  render() {
    const SIGNUP_MUTATION = gql`
      mutation($name: String!, $email: String!, $password: String!) {
        signup(name: $name, email: $email, password: $password) {
          token
          user {
            id
            name
            email
          }
        }
      }
    `;

    return (
      <React.Fragment>
        <div className="d-block">
          <div className="row no-gutters w-100">
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
              <div className="p-5 s-tm">
                <h2 className="p-colour text-center">SIgn Up</h2>
                <Mutation mutation={SIGNUP_MUTATION}>
                  {(signup, { loading, error, data }) => {
                    //  console.log({loading, error, data})
                    return (
                      <form
                        className="pl-3 pr-3"
                        onSubmit={async e => {
                          e.preventDefault();
                          let expectedValue;
                          try {
                            expectedValue = await signup({
                              variables: {
                                name: this.state.name,
                                email: this.state.email,
                                password: this.state.password
                              }
                            });

                            console.log(expectedValue)
                            if (expectedValue.data.signup === null){
                              this.setState({errorMessage: "The email has been used."})
                            }
                          } catch (e) {
                            console.log("Error:" + e);
                            // if (data.)
                          }
                        }}
                      >
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name=""
                            value={this.state.name}
                            className="form-control"
                            placeholder="Name"
                            onChange={e =>
                              this.setState({ name: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name=""
                            value={this.state.email}
                            className="form-control"
                            placeholder="Email"
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name=""
                            value={this.state.password}
                            className="form-control"
                            placeholder="Password"
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
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
                    );
                  }}
                </Mutation>
                <p className="text-center errormessage">{this.state.errorMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
