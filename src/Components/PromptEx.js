import React, { Component } from 'react'
import { Prompt } from "react-router-dom";

export default class PromptEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isBlocking: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            isBlocking: event.target.value.length > 0
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            value: '',
            isBlocking: false
        })
    }

    render() {
        const { isBlocking } = this.state

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form onSubmit={this.handleSubmit}>
                        <Prompt
                            when={isBlocking}
                            message={location =>
                                `Are you sure you want to go to ${location.pathname}`
                            }
                        />
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Input test</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Type something to block transitions"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">Block: {isBlocking ? "True" : "False"}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        )
    }
}
