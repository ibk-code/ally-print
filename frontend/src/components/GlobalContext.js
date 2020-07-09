import React from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import history from './history'
import _ from 'lodash'

const GlobalContext = React.createContext();

class GlobalContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: " ",
            email: " ",
            password: "",
            address: " ",
            phone: " ",
            gender: "Male",
            loggedIn: false,
            errorMessage: " ",
            addedItems: []
        }
    }

    componentDidMount() {
        let loggedInState = window.sessionStorage.getItem('loggedIn')
        let userCart = JSON.parse(window.localStorage.getItem('cartItems'));
        if(loggedInState){
            let signedState = JSON.parse(window.sessionStorage.getItem('userState'));
            this.setState({
                name:signedState.name,
                email: signedState.email,
                address: signedState.address,
                phone: signedState.phone,
                gender: signedState.gender,
                loggedIn: true
            })
        }

        if (userCart.length > 0) {
            this.setState({addedItems: userCart})
        }
    }

    setUser = (obj) => {
        this.setState({
            name: obj.user.name,
            email: obj.user.email,
            address: obj.user.address,
            phone: obj.user.phone,
            gender: obj.user.gender,
            loggedIn: true,
            errorMessage: " "
        })
        let sessionObj ={
            name: obj.user.name,
            email: obj.user.email,
            address: obj.user.address,
            phone: obj.user.phone,
            gender: obj.user.gender
        }
        history.push('/')
        window.sessionStorage.setItem("loggedIn", true);
        window.sessionStorage.setItem("userState", JSON.stringify(sessionObj))
        window.sessionStorage.setItem("userToken", JSON.stringify(`${obj.token}`))
    }

    componentDidUpdate() {
        window.localStorage.setItem("cartItems", JSON.stringify(this.state.addedItems))
    }


    render() {
        return(
            <GlobalContext.Provider value={{
                state: this.state,
                updateName: e => {
                    this.setState({name: e.target.value})
                },
                updateEmail: e => {
                    this.setState({email: e.target.value})
                },
                updatePassword: e => {
                    this.setState({password: e.target.value})
                },
                updateAddress: e => {
                    this.setState({address: e.target.value})
                },
                updatePhone: e => {
                    this.setState({phone: e.target.value})
                },
                updateGender: e => {
                    this.setState({gender: e.target.value})
                },
                updateQuantity: e => {
                    let curr = _.cloneDeep(this.state.addedItems);

                    let elemId= e.target.attributes.getNamedItem('data-product').value;
                    console.log(elemId);
                    
                    const elem = curr.find(item => {
                      return elemId === item.asset_id
                    })

                    elem.alt.pcs = e.target.value

                    let pos = curr.indexOf(elem);
                    curr[pos] = elem;

                    this.setState({addedItems: curr})
                },
                signUp: async (e, gqlparam) => {
                        e.preventDefault();
                          let expectedValue;
                          try {
                            expectedValue = await gqlparam({
                              variables: {
                                name: this.state.name,
                                email: this.state.email,
                                address: this.state.address,
                                phone: this.state.phone,
                                gender: this.state.gender,
                                password: this.state.password
                              }
                            });
                            console.log(expectedValue)
                            let obj = expectedValue.data.signup
                            if (obj === null){
                              this.setState({errorMessage: "The email has been used."})
                            }else{
                                this.setUser(obj)
                            }
                          } catch (e) {
                            console.log("Error:" + e);
                            // if (data.)
                          }
                },
                login: async (e, login) => {
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
                              this.setState({errorMessage: "username or password incorrect"})
                            }else{
                                let newObj = expectedValue.data.login
                                this.setUser(newObj);
                            }
                          } catch (e) {
                            console.log(e.message);
                            this.setState({errorMessage: "Please verify your email and password"})
                          }
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
                    })
                    window.sessionStorage.clear();
                },
                handleAddToCart: (e, products) => {
                    let elemId= e.target.attributes.getNamedItem('data-value').value;
                    console.log(elemId);
                    
                    const elem = products.find(item => {
                      return elemId === item.asset_id
                    })

                    if (this.state.addedItems.includes(elem)){
                        return;
                    }else{
                        this.setState(prevState => (
                            {addedItems: [...prevState.addedItems, elem]}
                        ));
                        console.log(elem);
                    }
                },
                removeFromCart: (e) => {
                    let elemId= e.target.attributes.getNamedItem('data-product').value;
                    console.log(elemId);
                    
                    let copyItems = _.cloneDeep(this.state.addedItems);

                    const elem = copyItems.find(item => {
                        return elemId === item.asset_id
                      })
                      console.log(elem);
                    let checkProduct = copyItems.indexOf(elem);

                    if (checkProduct !== -1){
                        copyItems.splice(checkProduct, 1);
                        this.setState({addedItems: copyItems})
                    }
                }
            }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export {GlobalContext, GlobalContextProvider}