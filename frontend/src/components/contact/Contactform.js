import React from 'react';

export default class Form extends React.Component{
    

    render(){
        return(
            <React.Fragment>
                <div>
                    <h5 className="p-color-2">Leave Us A Message</h5>
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                            id="name" 
                            className="form-control"
                            value={this.props.name}
                            type="text"
                            ref={elem => {this.props.elems.push(elem)}}
                            placeholder="Please type in your name"
                            onChange ={this.props.onchange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            id="email"
                            className="form-control"
                            ref={elem => {this.props.elems.push(elem)}}
                            placeholder="Please type in an active email"
                            value={this.props.email}
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange ={this.props.onchange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                            id="phone"
                            className="form-control"
                            value ={this.props.phone}
                            ref={elem => {this.props.elems.push(elem)}}
                            placeholder="Please type in your number"
                            type="number"
                            onChange ={this.props.onchange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                            id="message"
                            className="form-control"
                            ref={elem => {this.props.elems.push(elem)}}
                            value={this.props.message}
                            placeholder="Please drop your message"
                            onChange ={this.props.onchange}>
                            </textarea>
                        </div>
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