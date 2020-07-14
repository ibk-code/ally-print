import React from "react";
import history from "./history";
import _ from "lodash";
import axios from "axios";

const GlobalContext = React.createContext();

class GlobalContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      password: "",
      address: " ",
      phone: " ",
      gender: "Male",
      loggedIn: false,
      errorMessage: " ",
      addedItems: [],
    };
  }

  componentDidMount() {
    let loggedInState = window.sessionStorage.getItem("loggedIn");
    if (loggedInState) {
      let signedState = JSON.parse(window.sessionStorage.getItem("userState"));
      this.setState({
        name: signedState.name,
        email: signedState.email,
        address: signedState.address,
        phone: signedState.phone,
        gender: signedState.gender,
        loggedIn: true,
      });
    }
  }

  setUser = function (obj) {
    this.setState({
      name: obj.name,
      email: obj.email,
      address: obj.address,
      phone: obj.phone,
      gender: obj.gender,
      loggedIn: true,
      errorMessage: " ",
    });
    let sessionObj = {
      name: obj.name,
      email: obj.email,
      address: obj.address,
      phone: obj.phone,
      gender: obj.gender,
    };
    history.push("/");
    window.sessionStorage.setItem("loggedIn", true);
    window.sessionStorage.setItem("userState", JSON.stringify(sessionObj));
    window.sessionStorage.setItem("userToken", JSON.stringify(`${obj.token}`));
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          updateName: (e) => {
            this.setState({ name: e.target.value });
          },
          updateEmail: (e) => {
            this.setState({ email: e.target.value });
          },
          updatePassword: (e) => {
            this.setState({ password: e.target.value });
          },
          updateAddress: (e) => {
            this.setState({ address: e.target.value });
          },
          updatePhone: (e) => {
            this.setState({ phone: e.target.value });
          },
          updateGender: (e) => {
            this.setState({ gender: e.target.value });
          },
          updateQuantity: (e) => {
            let curr = _.cloneDeep(this.state.addedItems);

            let elemId = e.target.attributes.getNamedItem("data-product").value;
            console.log(elemId);

            const elem = curr.find((item) => {
              return elemId === item.asset_id;
            });

            elem.alt.pcs = e.target.value;

            let pos = curr.indexOf(elem);
            curr[pos] = elem;

            this.setState({ addedItems: curr });
          },
          signUp: async (e) => {
            e.preventDefault();

            const url = `https://allyprint.herokuapp.com/api/auth/signup`;

            axios({
              method: "post",
              url: url,
              data: {
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                password: this.state.password,
                gender: this.state.gender,
                phone: this.state.phone,
              },
            })
              .then((res) => {
                const obj = res.data;
                console.log(obj);
                this.setUser(obj);
              })
              .catch((e) => {
                this.setState({
                    status: true,
                    statusMessage: e.response.data.message,
                });
              });
          },
          login: async (e) => {
            e.preventDefault();
            const url = `https://allyprint.herokuapp.com/api/auth/login`;

            axios({
              method: "post",
              url: url,
              data: {
                email: this.state.email,
                password: this.state.password,
              },
            })
              .then((res) => {
                const obj = res.data;
                console.log(obj);
                this.setUser(obj);
              })
              .catch((e) => {
                console.log(e.response);
                this.setState({
                  status: true,
                  statusMessage: e.response.data.message,
                });
              });
          },
          logOut: () => {
            this.setState({
              name: " ",
              email: " ",
              password: "",
              address: " ",
              phone: " ",
              gender: "Male",
              loggedIn: false,
            });
            window.sessionStorage.clear();
          },
          handleAddToCart: (e, products) => {
            let elemId = e.target.attributes.getNamedItem("data-value").value;
            console.log(elemId);

            const elem = products.find((item) => {
              return elemId === item.asset_id;
            });

            if (this.state.addedItems.includes(elem)) {
              return;
            } else {
              this.setState((prevState) => ({
                addedItems: [...prevState.addedItems, elem],
              }));
              console.log(elem);
            }
          },
          removeFromCart: (e) => {
            let elemId = e.target.attributes.getNamedItem("data-product").value;
            console.log(elemId);

            let copyItems = _.cloneDeep(this.state.addedItems);

            const elem = copyItems.find((item) => {
              return elemId === item.asset_id;
            });
            console.log(elem);
            let checkProduct = copyItems.indexOf(elem);

            if (checkProduct !== -1) {
              copyItems.splice(checkProduct, 1);
              this.setState({ addedItems: copyItems });
            }
          },
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContext, GlobalContextProvider };
