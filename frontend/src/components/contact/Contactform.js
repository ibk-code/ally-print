import React from 'react';
import axios from 'axios';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            statusMessage: ''
        }
    }

    submitContact = (e) => {
        e.preventDefault();
        const url = `http://localhost:4000/api/ally_v1/contact`;
        axios({
        method: "post",
        url: url,
        data: {
            message: this.state.message,
            phone: this.state.phone,
            name: this.state.name,
            email: this.state.email
        },
        }).then(res => {
        this.setState({
            message: "",
            name: "",
            email: "",
            phone: "",
            statusMessage: "Thank you for the feedback"
        })
        }).catch(e => {
        this.setState({
            statusMessage: "Please try again your feedback was not submitted"
        })
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <h5 className="p-color-2">Leave Us A Message</h5>
                    <form onSubmit={this.submitContact}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                            id="name" 
                            required
                            className="form-control"
                            value={this.state.name}
                            type="text"
                            placeholder="Please type in your name"
                            onChange ={e => {this.setState({
                                name:e.target.value
                            })}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            id="email"
                            required
                            className="form-control"
                            placeholder="Please type in an active email"
                            value={this.state.email}
                            type="email"
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange ={e => {this.setState({
                                email:e.target.value
                            })}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                            id="phone"
                            required
                            className="form-control"
                            value ={this.state.phone}
                            ref={elem => {this.props.elems.push(elem)}}
                            placeholder="Please type in your number"
                            type="number"
                            onChange ={e => {this.setState({
                                phone:e.target.value
                            })}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                            id="message"
                            required
                            className="form-control"
                            ref={elem => {this.props.elems.push(elem)}}
                            value={this.state.message}
                            placeholder="Please drop your message"
                            onChange ={e => {this.setState({
                                message:e.target.value
                            })}}>
                            </textarea>
                        </div>
                        <div>{this.state.statusMessage}</div>
                        <button
                            className="btn bg-brand text-light w-100"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}