import React from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const LOGIN_MUTATION = gql`
      mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
                <h2 className="p-colour text-center">Log In</h2>
                <Mutation mutation={LOGIN_MUTATION}>
                  {(login, { loading, error, data }) => {
                    //  console.log({loading, error, data})
                    return (
                      <form
                        className="pl-3 pr-3"
                        onSubmit={async e => {
                          e.preventDefault();
                          let expectedValue;
                          try {
                            expectedValue = await login({
                              variables: {
                                email: this.state.email,
                                password: this.state.password
                              }
                            });

                            console.log(expectedValue)
                            if (expectedValue.data.login === null){
                              this.setState({errorMessage: "The email has been used."})
                            }
                          } catch (e) {
                            console.log("Error:" + e);
                            // if (data.)
                          }
                        }}
                      >
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name=""
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
                          <Link to="/signup" className="float-right p-colour">
                            Signup
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

export default Login;
